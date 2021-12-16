package com.example.droidly.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.droidly.Screen

@Composable
fun DroidlyNavHost(
    navController: NavHostController
) {
    val startDestination = Screen.startingScreen
    val screens = Screen.values()

    NavHost(navController = navController, startDestination = startDestination) {
        screens.map { screen ->
            composable(screen.name) {
                screen.composable.invoke(navController)
            }
        }
    }
}
