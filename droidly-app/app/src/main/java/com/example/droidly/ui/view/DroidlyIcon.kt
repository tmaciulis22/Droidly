package com.example.droidly.ui.view

import androidx.compose.material.Icon
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.vector.ImageVector

@Composable
fun DroidlyIcon(
    modifier: Modifier = Modifier,
    imageVector: ImageVector
) {
    Icon(
        modifier = modifier,
        imageVector = imageVector,
        contentDescription = "Icon",
    )
}
