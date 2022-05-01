package com.example.droidly

import androidx.navigation.NavController
import androidx.compose.runtime.Composable
import com.example.droidly.ui.view.*
import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.layout.*
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.foundation.rememberScrollState
import androidx.compose.foundation.verticalScroll
import androidx.compose.foundation.horizontalScroll
import androidx.compose.material.Divider
import androidx.compose.material.Text
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.*
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.draw.rotate
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import androidx.compose.ui.zIndex
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.room.*
import androidx.room.*
import com.squareup.moshi.Moshi
import com.squareup.moshi.adapters.Rfc3339DateJsonAdapter
import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.android.qualifiers.ApplicationContext
import dagger.hilt.components.SingletonComponent
import dagger.hilt.android.lifecycle.HiltViewModel
import java.util.Date
import javax.inject.Singleton
import okhttp3.OkHttpClient
import javax.inject.Inject
import androidx.lifecycle.ViewModel
import androidx.lifecycle.viewModelScope
import androidx.compose.runtime.LaunchedEffect
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.setValue
import androidx.hilt.navigation.compose.hiltViewModel
import kotlinx.coroutines.launch
import com.example.droidly.ui.navigation.navigate
import android.content.Context

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideAppDatabase(@ApplicationContext appContext: Context): AppDatabase {
        return Room.databaseBuilder(
            appContext,
            AppDatabase::class.java,
            "droidly-database"
        ).fallbackToDestructiveMigration().build()
    }

    @Singleton
    @Provides
    fun provideMoshi(): Moshi =
        Moshi
            .Builder()
            .add(Date::class.java, Rfc3339DateJsonAdapter().nullSafe())
            .addLast(KotlinJsonAdapterFactory())
            .build()

    @Singleton
    @Provides
    fun provideOkHttpClient(): OkHttpClient =
        OkHttpClient()
            .newBuilder()
            .build()

    @Singleton
    @Provides
    fun providePersonDao(appDatabase: AppDatabase): PersonDao = appDatabase.getPersonDao()

}

@Database(
    entities = [
        Person::class,
    ],
    version = 1
)
abstract class AppDatabase : RoomDatabase() {
    abstract fun getPersonDao(): PersonDao
}

data class MainState(
    val isLoading: Boolean = false,
    val persons: List<Person> = emptyList(),
)

@HiltViewModel
class MainViewModel @Inject constructor(
    val personDao: PersonDao
) : ViewModel() {

    var mainState by mutableStateOf(MainState())
        private set

    fun readAllPersons() = viewModelScope.launch {
        mainState = mainState.copy(isLoading = true)
        val persons = personDao.readAll()
        mainState = mainState.copy(persons = persons)
        mainState = mainState.copy(isLoading = false)
    }

    fun savePerson(person: Person) = viewModelScope.launch {
        mainState = mainState.copy(isLoading = true)
        personDao.save(person)
        val persons = personDao.readAll()
        mainState = mainState.copy(persons = persons)
        mainState = mainState.copy(isLoading = false)
    }

    fun deletePerson(person: Person) = viewModelScope.launch {
        mainState = mainState.copy(isLoading = true)
        personDao.delete(person)
        mainState = mainState.copy(persons = mainState.persons.filter { it != person })
        mainState = mainState.copy(isLoading = false)
    }

}
/**
* GENERATED BY DROIDLY BLOCK BUILDER
**/

enum class Screen(
    val composable: @Composable (NavController, Long, MainViewModel) -> Unit = {_, _, _ -> },
    val isModelScreen: Boolean = false,
    val showTopBar: Boolean = false,
    val bottomBarTabIcon: ImageVector? = null // for screens which show DroidlyBottomBar
) {
    Persons({ navController, _, mainViewModel -> Persons(navController, mainViewModel) }, false, false, null),
    PersonDetails({ navController, modelId, mainViewModel -> PersonDetails(navController, modelId, mainViewModel) }, true, false, null),
    CreatePerson({ navController, modelId, mainViewModel -> CreatePerson(navController, modelId, mainViewModel) }, true, false, null);

    companion object {
        val startingScreen: String
            get() = Persons.name
        val screensWithTopBar: List<Screen>
            get() = values().filter { it.showTopBar }
        val bottomNavTabs: List<Screen>
            get() = values().filter { it.bottomBarTabIcon != null }
    }
}

@Dao
interface PersonDao {

    @Query("SELECT * FROM person")
    suspend fun readAll(): List<Person>

    @Insert(onConflict = OnConflictStrategy.REPLACE)
    suspend fun save(entity: Person)

    @Delete
    suspend fun delete(entity: Person)
}

@Entity(tableName = "person")
data class Person(
    @PrimaryKey(autoGenerate = true) val id: Long? = null,
    var firstName: String? = null,
    var lastName: String? = null,
)

@Composable
fun Persons(
    navController: NavController,
    mainViewModel: MainViewModel = hiltViewModel()
) {
    LaunchedEffect("Persons") {
        mainViewModel.readAllPersons()
    }
    Column(
        modifier = Modifier
            .padding(all = 16.dp),
    ) {
        DroidlyLazyColumn(
            modifier = Modifier,
            dataList = mainViewModel.mainState.persons
        ) { item ->
            DroidlySurface(
                modifier = Modifier
                    .padding(bottom = 16.dp),
                elevation = 2.dp,
                onClick = { navController.navigate("PersonDetails", item.id) }
            ) {
                DroidlyText(
                    modifier = Modifier
                        .padding(all = 6.dp),
                    text = item.firstName?.toString() ?: "-",
                )
                DroidlyText(
                    modifier = Modifier
                        .padding(all = 6.dp),
                    text = item.lastName?.toString() ?: "-",
                )
            }
        }
        DroidlyFAB(
            modifier = Modifier,
            onClick = { navController.navigate("CreatePerson", -1L) },
            text = "Add",
        )
    }
}

@Composable
fun PersonDetails(
    navController: NavController,
    modelId: Long,
    mainViewModel: MainViewModel = hiltViewModel()
) {
    val item = mainViewModel.mainState.persons.firstOrNull { it.id == modelId } ?: Person()
    Column(
        modifier = Modifier
            .padding(all = 16.dp),
    ) {
        DroidlyText(
            modifier = Modifier
                .padding(bottom = 16.dp),
            text = item.firstName?.toString() ?: "-",
        )
        DroidlyImage(
            modifier = Modifier
                .padding(bottom = 16.dp),
            url = "https://images.unsplash.com/photo-1561361513-2d000a50f0dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80",
        )
        DroidlyButton(
            modifier = Modifier,
            onClick = { navController.navigateUp() },
            text = "Go back",
        )
    }
}

@Composable
fun CreatePerson(
    navController: NavController,
    modelId: Long,
    mainViewModel: MainViewModel = hiltViewModel()
) {
    val item = mainViewModel.mainState.persons.firstOrNull { it.id == modelId } ?: Person()
    Column(
        modifier = Modifier
            .padding(all = 16.dp),
    ) {
        DroidlyTextField(
            modifier = Modifier
                .padding(bottom = 16.dp),
            placeholder = "First name",
            onValueChanged = { item.firstName = it },
        )
        DroidlyTextField(
            modifier = Modifier
                .padding(bottom = 16.dp),
            placeholder = "Last name",
            onValueChanged = { item.lastName = it },
        )
        DroidlyButton(
            modifier = Modifier,
            onClick = {
                mainViewModel.savePerson(item)
                navController.navigateUp()
             },
            text = "Create",
        )
    }
}
