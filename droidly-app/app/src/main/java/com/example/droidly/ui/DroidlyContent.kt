package com.example.droidly.ui

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.padding
import androidx.compose.material.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.ui.Modifier
import androidx.navigation.compose.currentBackStackEntryAsState
import androidx.navigation.compose.rememberNavController
import com.example.droidly.Screen
import com.example.droidly.ui.navigation.DroidlyNavHost
import com.example.droidly.ui.view.CustomStatusBar
import com.example.droidly.ui.view.DroidlyBottomBar
import com.example.droidly.ui.view.DroidlyTopBar

@Composable
fun DroidlyContent() {
    val navController = rememberNavController()
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentRoute = navBackStackEntry?.destination?.route?.substringBefore("/")

    val showTopBar = Screen.screensWithTopBar.any { it.name == currentRoute }
    val showBottomBar = Screen.bottomNavTabs.any { it.name == currentRoute }

    CustomStatusBar()
    Scaffold(
        topBar = {
            if (showTopBar)
                DroidlyTopBar(
                    navController = navController,
                    title = currentRoute ?: "Droidly",
                    showNavigationIcon = !showBottomBar
                )
        },
        bottomBar = {
            if (showBottomBar)
                DroidlyBottomBar(navController)
        }
    ) { scaffoldPadding ->
        Box(Modifier.padding(scaffoldPadding)) {
            DroidlyNavHost(navController)
        }
    }
}
