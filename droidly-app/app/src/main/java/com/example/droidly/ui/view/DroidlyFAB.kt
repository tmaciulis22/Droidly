package com.example.droidly.ui.view

import androidx.compose.material.FloatingActionButton
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape

@Composable
fun DroidlyFAB(
    modifier: Modifier = Modifier,
    onClick: () -> Unit = {},
    text: String = "",
    buttonColor: Color = MaterialTheme.colors.primary,
    textColor: Color = MaterialTheme.colors.onPrimary,
    shape: Shape = MaterialTheme.shapes.small
) {
    FloatingActionButton(
        modifier = modifier,
        onClick = onClick,
        backgroundColor = buttonColor,
        contentColor = textColor,
        shape = shape
    ) {
        Text(text = text)
    }
}
