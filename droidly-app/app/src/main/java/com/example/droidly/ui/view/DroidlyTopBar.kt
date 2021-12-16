package com.example.droidly.ui.view

import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.navigation.NavController

@Composable
fun DroidlyTopBar(
    navController: NavController,
    title: String,
    showNavigationIcon: Boolean
){
    TopAppBar(
        title = {
            Text(title)
        },
        navigationIcon = if (showNavigationIcon)
            (@Composable { DroidlyIconButton { navController.popBackStack() }})
        else null
    )
}
