package com.example.droidly.ui.view

import androidx.compose.material.*
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.Warning
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.navigation.NavController
import androidx.navigation.NavDestination.Companion.hierarchy
import androidx.navigation.NavGraph.Companion.findStartDestination
import androidx.navigation.compose.currentBackStackEntryAsState
import com.example.droidly.Screen

@Composable
fun DroidlyBottomBar(navController: NavController) {
    val navBackStackEntry by navController.currentBackStackEntryAsState()
    val currentDestination = navBackStackEntry?.destination

    BottomNavigation(backgroundColor = MaterialTheme.colors.background) {
        Screen.bottomNavTabs.forEach { item ->
            BottomNavigationItem(
                icon = {
                    Icon(
                        imageVector = item.bottomBarTabIcon ?: Icons.Default.Warning,
                        contentDescription = "${item.name} tab"
                    )
                },
                label = { Text(item.name) },
                selected = currentDestination?.hierarchy?.any { it.route == item.name } == true,
                onClick = {
                    navController.navigate(item.name) {
                        popUpTo(navController.graph.findStartDestination().id) {
                            saveState = true
                        }
                        launchSingleTop = true
                        restoreState = true
                    }
                },
                selectedContentColor = MaterialTheme.colors.primary,
                unselectedContentColor = MaterialTheme.colors.onSurface.copy(0.6f)
            )
        }
    }
}
