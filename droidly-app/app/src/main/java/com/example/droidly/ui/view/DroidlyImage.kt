package com.example.droidly.ui.view

import androidx.compose.foundation.Image
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.layout.ContentScale
import coil.compose.rememberImagePainter
import com.example.droidly.R

@Composable
fun DroidlyImage(
    modifier: Modifier = Modifier,
    url: String? = null,
    alpha: Float = 1.0f
) {
    Image(
        modifier = modifier,
        painter = rememberImagePainter(url, builder = {
            crossfade(true)
            error(R.drawable.ic_error)
            placeholder(R.drawable.ic_loading)
        }),
        contentScale = ContentScale.Crop,
        contentDescription = "image",
        alpha = alpha
    )
}
