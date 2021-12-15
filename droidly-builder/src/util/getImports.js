export default function getImports() {
  const code = []

  code.push(
    'package com.example.droidly',
    '',
    'import com.example.droidly.ui.navigation.Screen',
    'import androidx.navigation.NavController',
    'import androidx.compose.runtime.Composable',
    'import com.example.droidly.ui.view.*',
    'import androidx.compose.foundation.BorderStroke',
    'import androidx.compose.foundation.layout.*',
    'import androidx.compose.foundation.shape.RoundedCornerShape',
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
    '',
    ''
  )
  
  return code.join('\n')
}
