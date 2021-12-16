package com.example.droidly.ui

import androidx.compose.foundation.isSystemInDarkTheme
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.MaterialTheme
import androidx.compose.material.Shapes
import androidx.compose.material.Typography
import androidx.compose.material.darkColors
import androidx.compose.material.lightColors
import androidx.compose.runtime.Composable
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp

val LightPrimary = Color(0xff4caf50)
val LightPrimaryVariant = Color(0xff80e27e)
val LightSecondary = Color(0xfffdd835)
val LightBackground = Color(0xffefefef)
val LightSurface = Color(0xffffffff)
val LightOnPrimary = Color(0xffffffff)
val LightOnSecondary = Color(0xffffffff)
val LightOnBackground = Color(0xff000000)
val LightOnSurface = Color(0xff000000)

val DarkPrimary = Color(0xff087f23)
val DarkPrimaryVariant = Color(0xff4caf50)
val DarkSecondary = Color(0xffc6a700)
val DarkBackground = Color(0xff2f3640)
val DarkSurface = Color(0xff455a64)
val DarkOnPrimary = Color(0xfff5f6fa)
val DarkOnSecondary = Color(0xfff5f6fa)
val DarkOnBackground = Color(0xfff5f6fa)
val DarkOnSurface = Color(0xfff5f6fa)

val Shapes = Shapes(
    small = RoundedCornerShape(4.dp),
    medium = RoundedCornerShape(4.dp),
    large = RoundedCornerShape(0.dp)
)

private val LightColorPalette = lightColors(
    primary = LightPrimary,
    onPrimary = LightOnPrimary,
    primaryVariant = LightPrimaryVariant,
    secondary = LightSecondary,
    onSecondary = LightOnSecondary,
    background = LightBackground,
    onBackground = LightOnBackground,
    surface = LightSurface,
    onSurface = LightOnSurface,
)

private val DarkColorPalette = darkColors(
    primary = DarkPrimary,
    onPrimary = DarkOnPrimary,
    primaryVariant = DarkPrimaryVariant,
    secondary = DarkSecondary,
    onSecondary = DarkOnSecondary,
    background = DarkBackground,
    onBackground = DarkOnBackground,
    surface = DarkSurface,
    onSurface = DarkOnSurface,
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
        typography = Typography(),
        shapes = Shapes,
        content = content
    )
}
