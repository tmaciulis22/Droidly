import Blockly from 'blockly';
import camelCase from './camelCase';

export default function generateDataLayerCode(modelBlocks) {
  const code = []

  code.push(
    getAppModuleAndDaos(modelBlocks)
  )

  return code.join('\n')
}

function getAppModuleAndDaos(modelBlocks) { // TODO refactor
  if (modelBlocks.length === 0) return ''

  const indent = Blockly.Kotlin.INDENT
  const code = []

  code.push(
    `@Module`,
    `@InstallIn(SingletonComponent::class)`,
    `object AppModule {`,
    ``,
    `${indent}@Provides`,
    `${indent}@Singleton`,
    `${indent}fun provideAppDatabase(@ApplicationContext appContext: Context): AppDatabase {`,
    `${indent}${indent}return Room.databaseBuilder(`,
    `${indent}${indent}${indent}appContext,`,
    `${indent}${indent}${indent}AppDatabase::class.java`,
    `${indent}${indent}${indent}"droidly-database"`,
    `${indent}${indent}).build()`,
    `${indent}}`,
    `}`,
    ``,
    `${indent}@Singleton`,
    `${indent}@Provides`,
    `${indent}fun provideMoshi(): Moshi =`,
    `${indent}${indent}Moshi`,
    `${indent}${indent}${indent}.Builder()`,
    `${indent}${indent}${indent}.add(Date::class.java, Rfc3339DateJsonAdapter().nullSafe())`,
    `${indent}${indent}${indent}.addLast(KotlinJsonAdapterFactory())`,
    `${indent}${indent}${indent}.build()`,
    ``,
    `${indent}@Singleton`,
    `${indent}@Provides`,
    `${indent}fun provideOkHttpClient(): OkHttpClient =`,
    `${indent}${indent}OkHttpClient()`,
    `${indent}${indent}${indent}.newBuilder()`,
    `${indent}${indent}${indent}.build()`,
    ``,
  )

  const modelNames = []
  const daoNames = []
  const daoAbstractFunctions = []
  const entities = modelBlocks.map(block => {
    const modelName = block.getFieldValue('MODEL_NAME')
    modelNames.push(modelName)
    daoNames.push(`${modelName}Dao`)
    daoAbstractFunctions.push(`${indent}abstract fun get${modelName}Dao(): ${modelName}Dao`)

    code.push(
      `${indent}@Singleton`,
      `${indent}@Provides`,
      `${indent}fun provide${modelName}Dao(appDatabase: AppDatabase): ${modelName}Dao = appDatabase.get${modelName}Dao()`,
      ``
    )

    return `${indent}${indent}${modelName}::class`
  }).join(',\n')

  code.push(`}`, ``)

  code.push(
    `@Database(`,
    `${indent}entities = [`,
    entities,
    `${indent}]`,
    `${indent}version = 1`,
    `)`,
    `abstract class AppDatabase : RoomDatabase() {`,
    daoAbstractFunctions.join('\n'),
    `}`,
    ``
  )

  code.push(
    `data class MainState(`,
    `${indent}val isLoading: Boolean = false`,
  )
  modelNames.forEach(name => {
    code.push(
      `${indent}val ${camelCase(name)}s: List<${name}> = emptyList()`
    )
  })
  code.push(
    `)`,
    ``
  )

  code.push(
    `class MainViewModel @Inject constructor(`
  )
  daoNames.forEach(name => {
    code.push(`${indent}val ${camelCase(name)}: ${name}`)
  })
  code.push(
    `) : ViewModel() {`,
    ``,
    `${indent}var mainState by mutableStateOf(MainState())`,
    `${indent}${indent}private set`,
    ``
  )

  const mainStateLoading = `${indent}${indent}mainState = MainState(isLoading = true)`
  const mainStateNotLoading = `${indent}${indent}mainState = MainState(isLoading = false)`

  modelNames.forEach((name, index) => {
    const modelNameCamel = camelCase(name)
    const daoNameCamel = camelCase(daoNames[index])

    code.push(
      `${indent}fun readAll${name}s() = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}val ${modelNameCamel}s = ${daoNameCamel}.readAll()`,
      `${indent}${indent}mainState = MainState(${modelNameCamel}s = ${modelNameCamel}s)`,
      `${indent}}`,
      ``,
      `${indent}fun save${name}(${modelNameCamel}: ${name}) = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}${daoNameCamel}.save(${modelNameCamel})`,
      mainStateNotLoading
      `${indent}}`,
      ``,
      `${indent}fun delete${name}(${modelNameCamel}: ${name}) = viewModelScope.launch {`,
      mainStateLoading,
      `${indent}${indent}${daoNameCamel}.delete(${modelNameCamel})`,
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
