package com.example.droidly.ui.view

import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier

@Composable
fun <T> DroidlyLazyColumn(
    modifier: Modifier = Modifier,
    dataList: List<T>,
    content: (@Composable (T) -> Unit)
) {
    LazyColumn(modifier = modifier) {
        items(dataList) { item ->
            content(item)
        }
    }
}
