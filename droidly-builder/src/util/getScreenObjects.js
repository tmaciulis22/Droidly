import Blockly from 'blockly';

export default function getScreenObjects(screenBlocks, startScreen) {
  const indent = Blockly.Kotlin.INDENT
  const code = []
  const names = []

  code.push(
    '/**',
    '* GENERATED BY DROIDLY BLOCK BUILDER',
    '**/',
    '',
    '',
  )

  screenBlocks.forEach(block => {
    const name = block.getFieldValue('SCREEN_NAME')
    const composable = `{ ${name}(it) }`
    const showTopBar = block.getFieldValue('SHOW_TOP_BAR') === 'TRUE' ? 'true' : 'false'
    const bottomBarTabIconValue = block.getFieldValue('BOTTOM_TAB_ICON')
    const bottomBarTabIcon = bottomBarTabIconValue ? `Icons.Default.${bottomBarTabIconValue}` : 'null'

    names.push(name)
    code.push(`object ${name} : Screen("${name}", ${composable}, ${showTopBar}, ${bottomBarTabIcon})`)
  })

  code.push(
    '',
    'object Screens {',
    `${indent}val startScreenRoute: String = ${startScreen}.route`,
    `${indent}val allScreens = listOf(`
  )
  names.forEach(name => code.push(`${indent}${indent}${name},`))
  code.push(
    `${indent})`,
    '}',
    '',
    ''
  )

  return code.join('\n')
}
