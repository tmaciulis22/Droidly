package com.example.droidly.ui.view

import androidx.compose.foundation.BorderStroke
import androidx.compose.material.Button
import androidx.compose.material.ButtonDefaults
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.graphics.Shape

@Composable
fun DroidlyButton(
    modifier: Modifier = Modifier,
    onClick: () -> Unit = {},
    text: String = "",
    buttonColor: Color = MaterialTheme.colors.primary,
    textColor: Color = MaterialTheme.colors.onPrimary,
    shape: Shape = MaterialTheme.shapes.small,
    border: BorderStroke? = null
) {
    Button(
        modifier = modifier,
        onClick = onClick,
        colors = ButtonDefaults.buttonColors(
            backgroundColor = buttonColor,
            contentColor = textColor
        ),
        shape = shape,
        border = border
    ) {
        Text(text = text)
    }
}
