package com.example.droidly.util

import com.google.firebase.database.DataSnapshot
import com.google.firebase.database.ktx.getValue

inline fun <reified T> DataSnapshot?.getListOfModels(): List<T> {
    return this?.children?.mapNotNull { it.getValue<T>() } ?: listOf()
}
