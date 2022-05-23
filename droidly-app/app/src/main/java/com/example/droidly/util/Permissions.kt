package com.example.droidly.util

import androidx.compose.runtime.Composable
import androidx.compose.runtime.LaunchedEffect
import com.google.accompanist.permissions.ExperimentalPermissionsApi
import com.google.accompanist.permissions.rememberPermissionState

@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun CameraPermissionRequest() {
    val cameraPermissionState = rememberPermissionState(
        android.Manifest.permission.CAMERA
    )

    LaunchedEffect(key1 = "CameraPermissionRequest") {
        cameraPermissionState.launchPermissionRequest()
    }
}

@OptIn(ExperimentalPermissionsApi::class)
@Composable
fun GalleryPermissionRequest() {
    val galleryPermissionState = rememberPermissionState(
        android.Manifest.permission.ACCESS_MEDIA_LOCATION
    )

    LaunchedEffect(key1 = "GalleryPermissionRequest") {
        galleryPermissionState.launchPermissionRequest()
    }
}
