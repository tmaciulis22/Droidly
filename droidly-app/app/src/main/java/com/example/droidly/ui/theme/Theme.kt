package com.example.droidly.ui.theme

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.material.MaterialTheme
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable

private val DarkColorPalette = darkColors(
    primary = Primary,
    primaryVariant = PrimaryVariant,
    secondary = Secondary,
    background = Background,
    surface = Surface,
    onSurface = OnSurface
)

private val LightColorPalette = lightColors(
    primary = Primary,
    primaryVariant = PrimaryVariant,
    secondary = Secondary,
    background = Background,
    surface = Surface,
    onSurface = OnSurface
)

@Composable
fun DroidlyTheme(darkTheme: Boolean = isSystemInDarkTheme(), content: @Composable() () -> Unit) {
    val colors = if (darkTheme) {
        DarkColorPalette
    } else {
        LightColorPalette
    }

    MaterialTheme(
        colors = colors,
        typography = Typography,
        shapes = Shapes,
        content = content
    )
}
