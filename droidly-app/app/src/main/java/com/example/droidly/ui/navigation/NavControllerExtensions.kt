package com.example.droidly.ui.navigation

import androidx.navigation.NavController

fun NavController.navigate(screenName: String, modelId: Long? = null) {
    if (modelId != null) {
        navigate(route = "$screenName/$modelId}")
    } else {
        navigate(route = screenName)
    }
}
