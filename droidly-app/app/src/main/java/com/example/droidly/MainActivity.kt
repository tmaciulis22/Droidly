package com.example.droidly

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.compose.material.*
import androidx.compose.runtime.Composable
import com.example.droidly.ui.theme.DroidlyTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DroidlyTheme {
                Content()
            }
        }
    }
}

@Composable
fun Content() {
    // TODO insert generated code here
}
