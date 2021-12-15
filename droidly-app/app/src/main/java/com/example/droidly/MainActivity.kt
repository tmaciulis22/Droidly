package com.example.droidly

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import com.example.droidly.ui.DroidlyContent
import com.example.droidly.ui.DroidlyTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            DroidlyTheme {
                DroidlyContent()
            }
        }
    }
}
