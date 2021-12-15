package com.example.droidly

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.droidly.ui.navigation.AppBarConfig
import com.example.droidly.ui.navigation.DroidlyNavHost
import com.example.droidly.ui.view.DroidlyBottomBar
import com.example.droidly.ui.view.DroidlyTopBar

@Composable
fun DroidlyContent() {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route

    val screensWithTopBar = Screens.allScreens.filter { it.appBarConfig != AppBarConfig.NoAppBar }
    val screensWithBottomBar = Screens.allScreens.filter { it.imageVector != null }

    Scaffold(
        topBar = {
            if (screensWithTopBar.any { it.route == currentRoute })
                DroidlyTopBar(
                    navController = navController,
                    title = currentRoute ?: "Droidly",
                    showNavigationIcon = screensWithTopBar
                        .find { it.route == currentRoute }?.appBarConfig == AppBarConfig.ShowAppBarWithNavigationIcon
                )
        },
        bottomBar = {
            if (screensWithBottomBar.any { it.route == currentRoute })
                DroidlyBottomBar(navController)
        }
    ) { scaffoldPadding ->
        Box(Modifier.padding(scaffoldPadding)) {
            DroidlyNavHost(navController)
        }
    }
}
