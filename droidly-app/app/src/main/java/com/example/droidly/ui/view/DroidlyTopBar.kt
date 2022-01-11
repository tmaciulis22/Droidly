package com.example.droidly.ui.view

import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.material.TopAppBar
import androidx.compose.runtime.Composable
import androidx.compose.ui.text.font.FontWeight
import androidx.navigation.NavController

@Composable
fun DroidlyTopBar(
    navController: NavController,
    title: String,
    showNavigationIcon: Boolean
){
    TopAppBar(
        title = {
            Text(
                title,
                fontWeight = FontWeight.W800
            )
        },
        navigationIcon = if (showNavigationIcon)
            (@Composable { DroidlyIconButton { navController.popBackStack() }})
        else null,
        backgroundColor = MaterialTheme.colors.surface
    )
}
