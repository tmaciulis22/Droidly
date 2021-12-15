package com.example.droidly.ui.view

import androidx.compose.material.Icon
import androidx.compose.material.IconButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.icons.Icons
import androidx.compose.material.icons.filled.ArrowBack
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.vector.ImageVector

@Composable
fun DroidlyIconButton(
    modifier: Modifier = Modifier,
    imageVector: ImageVector = Icons.Default.ArrowBack,
    tint: Color = MaterialTheme.colors.primary,
    onClick: () -> Unit = {}
) {
    IconButton(
        modifier = modifier,
        onClick = { onClick() }
    ) {
        Icon(imageVector = imageVector, contentDescription = "icon", tint = tint)
    }
}
