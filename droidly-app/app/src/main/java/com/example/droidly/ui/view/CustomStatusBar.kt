package com.example.droidly.ui.view

import androidx.compose.material.MaterialTheme
import androidx.compose.material.primarySurface
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import com.google.accompanist.systemuicontroller.rememberSystemUiController

@Composable
fun CustomStatusBar() {
    val systemUiController = rememberSystemUiController()
    val surfaceColor = MaterialTheme.colors.surface

    SideEffect {
        systemUiController.setStatusBarColor(
            color = surfaceColor
        )
    }
}
