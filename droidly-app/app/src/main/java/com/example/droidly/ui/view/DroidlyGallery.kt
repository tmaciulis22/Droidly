package com.example.droidly.ui.view

import android.net.Uri
import androidx.activity.compose.rememberLauncherForActivityResult
import androidx.activity.result.contract.ActivityResultContracts
import androidx.compose.runtime.Composable
import androidx.compose.runtime.SideEffect
import com.example.droidly.util.GalleryPermissionRequest

@Composable
fun DroidlyGallery(
    onImageUri: (Uri?) -> Unit = { }
) {
    GalleryPermissionRequest()
    val launcher = rememberLauncherForActivityResult(
        contract = ActivityResultContracts.GetContent(),
        onResult = { uri: Uri? ->
            onImageUri(uri)
        }
    )

    SideEffect {
        launcher.launch("image/*")
    }
}
