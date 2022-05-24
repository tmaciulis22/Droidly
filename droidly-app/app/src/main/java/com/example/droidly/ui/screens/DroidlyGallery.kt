package com.example.droidly.ui.screens

import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import com.example.droidly.util.GalleryPermissionRequest

@Composable
fun DroidlyGallery(
    onImageUri: (String) -> Unit = { }
) {
    GalleryPermissionRequest()
    val launcher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent(),
        onResult = { uri: Uri? ->
            onImageUri(uri?.toString() ?: "")
        }
    )

    SideEffect {
        launcher.launch("image/*")
    }
}
