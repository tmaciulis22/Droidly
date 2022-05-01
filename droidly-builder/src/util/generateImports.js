export default function generateViewLayerImports() {
  const code = []

  code.push(
    'package com.example.droidly',
    '',
    'import androidx.navigation.NavController',
    'import androidx.compose.runtime.Composable',
    'import com.example.droidly.ui.view.*',
    'import androidx.compose.foundation.BorderStroke',
    'import androidx.compose.foundation.layout.*',
    'import androidx.compose.foundation.shape.RoundedCornerShape',
    'import androidx.compose.foundation.rememberScrollState',
    'import androidx.compose.foundation.verticalScroll',
    'import androidx.compose.foundation.horizontalScroll',
    'import androidx.compose.material.Divider',
    'import androidx.compose.material.Text',
    'import androidx.compose.material.icons.Icons',
    'import androidx.compose.material.icons.filled.*',
    'import androidx.compose.ui.Alignment',
    'import androidx.compose.ui.Modifier',
    'import androidx.compose.ui.draw.rotate',
    'import androidx.compose.ui.graphics.Color',
    'import androidx.compose.ui.graphics.Shape',
    'import androidx.compose.ui.text.font.FontWeight',
    'import androidx.compose.ui.unit.dp',
    'import androidx.compose.ui.unit.sp',
    'import androidx.compose.ui.zIndex',
    'import androidx.compose.ui.graphics.vector.ImageVector',
    'import androidx.room.*',
    'import androidx.room.*',
    'import com.squareup.moshi.Moshi',
    'import com.squareup.moshi.adapters.Rfc3339DateJsonAdapter',
    'import com.squareup.moshi.kotlin.reflect.KotlinJsonAdapterFactory',
    'import dagger.Module',
    'import dagger.Provides',
    'import dagger.hilt.InstallIn',
    'import dagger.hilt.android.qualifiers.ApplicationContext',
    'import dagger.hilt.components.SingletonComponent',
    'import dagger.hilt.android.lifecycle.HiltViewModel',
    'import java.util.Date',
    'import javax.inject.Singleton',
    'import okhttp3.OkHttpClient',
    'import javax.inject.Inject',
    'import androidx.lifecycle.ViewModel',
    'import androidx.lifecycle.viewModelScope',
    'import androidx.compose.runtime.LaunchedEffect',
    'import androidx.compose.runtime.getValue',
    'import androidx.compose.runtime.mutableStateOf',
    'import androidx.compose.runtime.setValue',
    'import androidx.hilt.navigation.compose.hiltViewModel',
    'import kotlinx.coroutines.launch',
    'import com.example.droidly.ui.navigation.navigate',
    'import android.content.Context',
    '',
    ''
  )
  
  return code.join('\n')
}
