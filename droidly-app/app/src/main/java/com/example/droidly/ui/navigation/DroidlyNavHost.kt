package com.example.droidly.ui.navigation

import androidx.compose.runtime.Composable
import androidx.navigation.NavHostController
import androidx.navigation.compose.NavHost
import androidx.navigation.compose.composable
import com.example.droidly.Screens

@Composable
fun DroidlyNavHost(
    navController: NavHostController
) {
    val startDestination = Screens.startingScreenName
    val screens = Screens.allScreens

    NavHost(navController = navController, startDestination = startDestination) {
        screens.map { screen ->
            composable(screen.route) {
                screen.composable.invoke(navController)
            }
        }
    }
}
