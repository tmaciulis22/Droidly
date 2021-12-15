package com.example.droidly.ui.navigation

import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.navigation.NavController

abstract class Screen(
    val route: String,
    val composable: @Composable (NavController) -> Unit,
    val imageVector: ImageVector? = null, // for screens which show DroidlyBottomBar
    val appBarConfig: AppBarConfig = AppBarConfig.NoAppBar // for screens which show DroidlyTopBar
)

enum class AppBarConfig {
    NoAppBar,
    ShowAppBar,
    ShowAppBarWithNavigationIcon;
}
