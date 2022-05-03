package com.example.droidly.util

import androidx.navigation.NavController

fun NavController.navigate(screenName: String, modelId: String? = null) {
    if (modelId != null) {
        navigate(route = "$screenName/$modelId")
    } else {
        navigate(route = screenName)
    }
}
