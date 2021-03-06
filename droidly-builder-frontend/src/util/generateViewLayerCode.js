import Blockly from 'blockly';
import checkIfModelScreen from './checkIfModelScreen';
import hasTakePictureBlock from './hasTakePictureBlock';
import hasSelectFromGalleryBlock from './hasSelectFromGalleryBlock';

export default function generateViewLayerCode(screenBlocks, startScreen) {
  const indent = Blockly.Kotlin.INDENT
  const code = []

  code.push(
    'enum class Screen(',
    `${indent}val composable: @Composable (NavController, String, MainViewModel) -> Unit = {_, _, _ -> },`,
    `${indent}val isModelScreen: Boolean = false,`,
    `${indent}val showTopBar: Boolean = false,`,
    `${indent}val bottomBarTabIcon: ImageVector? = null // for screens which show DroidlyBottomBar`,
    ') {'
  )

  const takePictureBlock = hasTakePictureBlock(screenBlocks)
  if (takePictureBlock) {
    code.push(`${indent}CameraScreen({ navController, _, mainViewModel -> CameraScreen(navController, mainViewModel) }),`)
  }
  const selectFromGalleryBlock = hasSelectFromGalleryBlock(screenBlocks)
  if (selectFromGalleryBlock) {
    code.push(`${indent}GalleryScreen({ navController, _, mainViewModel -> CameraScreen(navController, mainViewModel) }),`)
  }

  screenBlocks.forEach((block, index) => {
    const name = block.getFieldValue('SCREEN_NAME')
    const isModelScreen = checkIfModelScreen(block)
    const composable = isModelScreen 
      ? `{ navController, modelId, mainViewModel -> ${name}(navController, modelId, mainViewModel) }`
      :  `{ navController, _, mainViewModel -> ${name}(navController, mainViewModel) }`
    const showTopBar = block.getFieldValue('SHOW_TOP_BAR') === 'TRUE' ? 'true' : 'false'
    const bottomBarTabIconValue = block.getFieldValue('BOTTOM_TAB_ICON')
    const includeIcon = bottomBarTabIconValue !== 'NO_BAR' && bottomBarTabIconValue !== null
    const bottomBarTabIcon = includeIcon ? `Icons.Default.${bottomBarTabIconValue}` : 'null'
    const commaOrSemicolon = index === screenBlocks.length -1 ? ';' : ','

    code.push(`${indent}${name}(${composable}, ${isModelScreen}, ${showTopBar}, ${bottomBarTabIcon})${commaOrSemicolon}`)
  })

  code.push(
    '',
    `${indent}companion object {`,
    `${indent}${indent}val startingScreen: String`,
    `${indent}${indent}${indent}get() = ${startScreen}.name`,
    `${indent}${indent}val screensWithTopBar: List<Screen>`,
    `${indent}${indent}${indent}get() = values().filter { it.showTopBar }`,
    `${indent}${indent}val bottomNavTabs: List<Screen>`,
    `${indent}${indent}${indent}get() = values().filter { it.bottomBarTabIcon != null }`,
    `${indent}}`,
    '}',
    '',
  )

  if (takePictureBlock) {
    code.push(
      `@Composable`,
      `fun CameraScreen(`,
      `${indent}navController: NavController,`,
      `${indent}mainViewModel: MainViewModel`,
      `) {`,
      `${indent}DroidlyCamera {`,
      `${indent}${indent}mainViewModel.setPicUri(it)`,
      `${indent}${indent}navController.navigateUp()`,
      `${indent}}`,
      `}`,
      ''
    )
  }
  if (selectFromGalleryBlock) {
    code.push(
      `@Composable`,
      `fun GalleryScreen(`,
      `${indent}navController: NavController,`,
      `${indent}mainViewModel: MainViewModel`,
      `) {`,
      `${indent}DroidlyGallery {`,
      `${indent}${indent}mainViewModel.picUri = it`,
      `${indent}${indent}navController.navigateUp()`,
      `${indent}}`,
      `}`,
      ''
    )
  }

  code.push('')

  return code.join('\n')
}
