import Blockly from 'blockly';
import camelCase from './camelCase';

export default function generateDataLayerCode(modelBlocks) {
  const code = []

  code.push(
    getAppModuleAndDaos(modelBlocks),
    getViewModel(modelBlocks)
  )

  return code.join('\n')
}

function getAppModuleAndDaos(modelBlocks) {
  if (modelBlocks.length === 0) return ''

  const localModelBlocks = modelBlocks.filter(block => block.getFieldValue('MODEL_SOURCE') === 'LOCAL')
  const indent = Blockly.Kotlin.INDENT
  const code = []

  code.push(
    `@Module`,
    `@InstallIn(SingletonComponent::class)`,
    `object AppModule {`,
    ``,
  )
  if (localModelBlocks.length !== 0) {
    code.push(
      `${indent}@Provides`,
      `${indent}@Singleton`,
      `${indent}fun provideAppDatabase(@ApplicationContext appContext: Context): AppDatabase {`,
      `${indent}${indent}return Room.databaseBuilder(`,
      `${indent}${indent}${indent}appContext,`,
      `${indent}${indent}${indent}AppDatabase::class.java,`,
      `${indent}${indent}${indent}"droidly-database"`,
      `${indent}${indent}).fallbackToDestructiveMigration().build()`,
      `${indent}}`,
      ``,
    )
  }
  code.push(
    `${indent}@Provides`,
    `${indent}@Singleton`,
    `${indent}fun provideFirebaseDatabase() = Firebase`,
    `${indent}${indent}.database`,
    `${indent}${indent}.reference`,
    ``,
    `${indent}@Provides`,
    `${indent}@Singleton`,
    `${indent}fun provideMoshi(): Moshi =`,
    `${indent}${indent}Moshi`,
    `${indent}${indent}${indent}.Builder()`,
    `${indent}${indent}${indent}.add(Date::class.java, Rfc3339DateJsonAdapter().nullSafe())`,
    `${indent}${indent}${indent}.addLast(KotlinJsonAdapterFactory())`,
    `${indent}${indent}${indent}.build()`,
    ``,
    `${indent}@Provides`,
    `${indent}@Singleton`,
    `${indent}fun provideOkHttpClient(): OkHttpClient =`,
    `${indent}${indent}OkHttpClient()`,
    `${indent}${indent}${indent}.newBuilder()`,
    `${indent}${indent}${indent}.build()`,
    ``,
  )

  const modelNames = []
  const daoAbstractFunctions = []
  const entities = localModelBlocks.map(block => {
    const modelName = block.getFieldValue('MODEL_NAME')
    modelNames.push(modelName)
    daoAbstractFunctions.push(`${indent}abstract fun get${modelName}Dao(): ${modelName}Dao`)

    code.push(
      `${indent}@Singleton`,
      `${indent}@Provides`,
      `${indent}fun provide${modelName}Dao(appDatabase: AppDatabase): ${modelName}Dao = appDatabase.get${modelName}Dao()`,
      ``
    )

    return `${indent}${indent}${modelName}::class,`
  }).join(',\n')

  code.push(`}`, ``)

  if (entities.length !== 0) {
    code.push(
      `@Database(`,
      `${indent}entities = [`,
      entities,
      `${indent}],`,
      `${indent}version = 1,`,
      `${indent}exportSchema = false`,
      `)`,
      `abstract class AppDatabase : RoomDatabase() {`,
      daoAbstractFunctions.join('\n'),
      `}`,
      ``
    )
  }

  return code.join('\n')
}

function getViewModel(modelBlocks) {
  const code = []
  const indent = Blockly.Kotlin.INDENT

  const localModelBlocks = modelBlocks.filter(block => block.getFieldValue('MODEL_SOURCE') === 'LOCAL')
  const firebaseModelBlocks = modelBlocks.filter(block => block.getFieldValue('MODEL_SOURCE') === 'FIREBASE')
  const daoNames = []
  const localModelNames = localModelBlocks.map(block => {
    const modelName = block.getFieldValue('MODEL_NAME')
    daoNames.push(`${modelName}Dao`)

    return modelName
  })
  const firebaseModelNames = firebaseModelBlocks.map(block => block.getFieldValue('MODEL_NAME'))

  code.push(
    `data class MainState(`,
    `${indent}val isLoading: Boolean = false,`,
  )
  localModelNames.forEach(name => {
    code.push(
      `${indent}val ${camelCase(name)}s: List<${name}> = emptyList(),`
    )
  })
  firebaseModelNames.forEach(name => {
    code.push(
      `${indent}val ${camelCase(name)}s: List<${name}> = emptyList(),`
    )
  })
  code.push(
    `)`,
    ``
  )

  code.push(
    `@HiltViewModel`,
    `class MainViewModel @Inject constructor(`,
    `${indent}private val firebaseDatabase: DatabaseReference,`
  )
  daoNames.forEach(name => {
    code.push(`${indent}private val ${camelCase(name)}: ${name},`)
  })
  code.push(
    `) : ViewModel() {`,
    ``,
    `${indent}var mainState by mutableStateOf(MainState())`,
    `${indent}${indent}private set`,
    ``
  )

  const mainStateLoading = `${indent}${indent}mainState = mainState.copy(isLoading = true)`
  const mainStateNotLoading = `${indent}${indent}mainState = mainState.copy(isLoading = false)`

  localModelNames.forEach((name, index) => {
    const modelNameCamel = camelCase(name)
    const daoNameCamel = camelCase(daoNames[index])

    code.push(
      `${indent}fun readAll${name}s() = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}val ${modelNameCamel}s = ${daoNameCamel}.readAll()`,
      `${indent}${indent}mainState = mainState.copy(${modelNameCamel}s = ${modelNameCamel}s)`,
      mainStateNotLoading,
      `${indent}}`,
      ``,
      `${indent}fun save${name}(${modelNameCamel}: ${name}) = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}if (${modelNameCamel}.id == "-1") {`,
      `${indent}${indent}${indent}val updated${name} = ${modelNameCamel}.copy(id = UUID.randomUUID().toString())`,
      `${indent}${indent}${indent}val updated${name}s = mainState.${modelNameCamel}s.toMutableList()`,
      `${indent}${indent}${indent}updated${name}s.add(updated${name})`,
      `${indent}${indent}${indent}${daoNameCamel}.save(updated${name})`,
      `${indent}${indent}${indent}mainState = mainState.copy(${modelNameCamel}s = updated${name}s)`,
      `${indent}${indent}} else {`,
      `${indent}${indent}${indent}${daoNameCamel}.save(${modelNameCamel})`,
      `${indent}${indent}}`,
      mainStateNotLoading,
      `${indent}}`,
      ``,
      `${indent}fun delete${name}(${modelNameCamel}: ${name}) = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}${daoNameCamel}.delete(${modelNameCamel})`,
      `${indent}${indent}mainState = mainState.copy(${modelNameCamel}s = mainState.${modelNameCamel}s.filter { it != ${modelNameCamel} })`,
      mainStateNotLoading,
      `${indent}}`,
      ``
    )
  })
  firebaseModelNames.forEach(name => {
    const modelNameCamel = camelCase(name)

    code.push(
      `${indent}fun readAll${name}s() = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}firebaseDatabase.child("${modelNameCamel}").get().addOnSuccessListener {`,
      `${indent}${indent}${indent}val ${modelNameCamel}s = it.getListOfModels<${name}>()`,
      `${indent}${indent}${indent}mainState = mainState.copy(${modelNameCamel}s = ${modelNameCamel}s)`,
      `${indent}${mainStateNotLoading}`,
      `${indent}${indent}}.addOnFailureListener {`,
      `${indent}${mainStateNotLoading}`,
      `${indent}${indent}}`,
      `${indent}}`,
      ``,
      `${indent}fun save${name}(${modelNameCamel}: ${name}) = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}if (${modelNameCamel}.id == "-1") {`,
      `${indent}${indent}${indent}val pushRef = firebaseDatabase.child("${modelNameCamel}").push()`,
      `${indent}${indent}${indent}val newKey = pushRef.key ?: "-1"`,
      `${indent}${indent}${indent}val updated${name} = ${modelNameCamel}.copy(id = newKey)`,
      `${indent}${indent}${indent}pushRef.setValue(updated${name}) { _, _ ->`,
      `${indent}${indent}${indent}${indent}val updated${name}s = mainState.${modelNameCamel}s.toMutableList()`,
      `${indent}${indent}${indent}${indent}mainState = mainState.copy(${modelNameCamel}s = updated${name}s)`,
      `${indent}${indent}${mainStateNotLoading}`,
      `${indent}${indent}${indent}}`,
      `${indent}${indent}} else {`,
      `${indent}${indent}${indent}firebaseDatabase.child("${modelNameCamel}").child(${modelNameCamel}.id).setValue(${modelNameCamel})`,
      `${indent}${mainStateNotLoading}`,
      `${indent}${indent}}`,
      `${indent}}`,
      ``,
      `${indent}fun delete${name}(${modelNameCamel}: ${name}) = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}if (${modelNameCamel}.id != "-1") {`,
      `${indent}${indent}${indent}firebaseDatabase.child("${modelNameCamel}").child(${modelNameCamel}.id).removeValue()`,
      `${indent}${indent}}`,
      `${indent}${indent}mainState = mainState.copy(${modelNameCamel}s = mainState.${modelNameCamel}s.filter { it != ${modelNameCamel} })`,
      mainStateNotLoading,
      `${indent}}`,
      ``
    )
  })

  code.push(
    `}`,
    ``
  )

  return code.join('\n')
}
