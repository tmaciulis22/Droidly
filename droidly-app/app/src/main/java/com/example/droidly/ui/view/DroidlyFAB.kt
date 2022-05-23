package com.example.droidly.ui.view

import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.CircleShape
import androidx.compose.material.FloatingActionButton
import androidx.compose.material.Icon
import androidx.compose.material.MaterialTheme
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape
import androidx.compose.ui.graphics.vector.ImageVector
import androidx.compose.ui.unit.dp

@Composable
fun DroidlyFAB(
    modifier: Modifier = Modifier,
    onClick: () -> Unit = {},
    imageVector: ImageVector,
    buttonColor: Color = MaterialTheme.colors.primary,
    textColor: Color = MaterialTheme.colors.onPrimary,
    shape: Shape = CircleShape
) {
    Box(modifier = Modifier.fillMaxSize()) {
        FloatingActionButton(
            modifier = modifier
                .align(Alignment.BottomEnd)
                .padding(16.dp),
            onClick = onClick,
            backgroundColor = buttonColor,
            contentColor = textColor,
            shape = shape
        ) {
            Icon(
                imageVector = imageVector,
                contentDescription = "FAB",
            )
        }
    }
}
