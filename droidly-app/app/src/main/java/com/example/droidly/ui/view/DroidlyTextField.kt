package com.example.droidly.ui.view

import androidx.compose.foundation.BorderStroke
import androidx.compose.foundation.border
import androidx.compose.foundation.shape.ZeroCornerSize
import androidx.compose.ui.graphics.Shape
import androidx.compose.foundation.text.KeyboardActions
import androidx.compose.foundation.text.KeyboardOptions
import androidx.compose.material.*
import androidx.compose.runtime.*
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.platform.LocalFocusManager
import androidx.compose.ui.text.input.ImeAction
import androidx.compose.ui.text.input.TextFieldValue

@Composable
fun DroidlyTextField(
    modifier: Modifier = Modifier,
    placeholder: String = "",
    color: Color = MaterialTheme.colors.onSurface.copy(alpha = TextFieldDefaults.BackgroundOpacity),
    textColor: Color = MaterialTheme.colors.onSurface,
    shape: Shape = MaterialTheme.shapes.small.copy(bottomEnd = ZeroCornerSize, bottomStart = ZeroCornerSize),
    singleLine: Boolean = true,
    border: BorderStroke? = null,
    onValueChanged: (String) -> Unit = {}
) {
    val modifierToAdd = border?.let {
        modifier.then(Modifier.border(border, shape))
    } ?: modifier

    val focusManager = LocalFocusManager.current
    var textFieldValueState by remember { mutableStateOf(TextFieldValue("")) }
    val textFieldValue = textFieldValueState.copy()

    TextField(
        modifier = modifierToAdd,
        value = textFieldValue,
        onValueChange = {
            textFieldValueState = it
            onValueChanged(it.text)
        },
        singleLine = singleLine,
        placeholder = {
            Text(placeholder)
        },
        shape = shape,
        colors = TextFieldDefaults.textFieldColors(
            textColor = textColor,
            backgroundColor = color,
            cursorColor = textColor,
            focusedIndicatorColor = Color.Transparent,
            unfocusedIndicatorColor = Color.Transparent
        ),
        keyboardOptions = KeyboardOptions(imeAction = ImeAction.Go),
        keyboardActions = KeyboardActions(onGo = {
            focusManager.clearFocus()
        })
    )
}
