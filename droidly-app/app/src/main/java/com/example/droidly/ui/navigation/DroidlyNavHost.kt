package com.example.droidly.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.runtime.remember
import androidx.compose.ui.res.stringResource
import androidx.hilt.navigation.compose.hiltViewModel
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
                composable("${screen.name}/{${modelIdArgumentKey}}") {
                    val parentEntry = remember {
                        navController.getBackStackEntry(startDestination)
                    }
                    screen.composable.invoke(
                        navController,
                        it.arguments?.getString(modelIdArgumentKey)?.toLong() ?: -1L,
                        hiltViewModel(parentEntry)
                    )
                }
            } else {
                composable(screen.name) {
                    val parentEntry = remember {
                        navController.getBackStackEntry(startDestination)
                    }
                    screen.composable.invoke(
                        navController,
                        -1L,
                        hiltViewModel(parentEntry)
                    )
                }
            }
        }
    }
}
