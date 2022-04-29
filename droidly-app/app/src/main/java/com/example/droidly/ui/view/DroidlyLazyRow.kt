package com.example.droidly.ui.view

import androidx.compose.foundation.lazy.LazyRow
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
fun <T> DroidlyLazyRow(
    modifier: Modifier = Modifier,
    dataList: List<T>,
    content: (@Composable (T) -> Unit)
) {
    LazyRow(modifier = modifier) {
        items(dataList) { item ->
            content(item)
        }
    }
}
