package com.example.droidly.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.res.stringResource
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.droidly.R
import com.example.droidly.Screen

@Composable
fun DroidlyNavHost(
    navController: NavHostController
) {
    val startDestination = Screen.startingScreen
    val screens = Screen.values()
    val modelIdArgumentKey = stringResource(R.string.modelId_argument_key)

    NavHost(navController = navController, startDestination = startDestination) {
        screens.map { screen ->
            if (screen.isModelScreen) {
                composable("${screen.name}/${modelIdArgumentKey}") {
                    screen.composable.invoke(
                        navController,
                        it.arguments?.getString(stringResource(R.string.modelId_argument_key))?.toLong() ?: -1
                    )
                }
            } else {
                composable(screen.name) {
                    screen.composable.invoke(navController, -1L)
                }
            }
        }
    }
}
