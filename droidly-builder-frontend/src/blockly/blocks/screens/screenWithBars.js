import Blockly from 'blockly';

Blockly.Blocks['screenWithBars'] = {
  init: function() {
    this.setColour(20)
    this.setTooltip('Defines app screen with top and bottom bars. If no bottom bar icon is picked then the bar won\'t be shown')
    this.appendDummyInput()
      .appendField('Screen')
      .appendField(new Blockly.FieldTextInput('NameOfScreen'), 'SCREEN_NAME')
    this.appendDummyInput('TOP_BAR')
      .appendField('show top bar:')
      .appendField(new Blockly.FieldCheckbox(), 'SHOW_TOP_BAR')
    this.appendDummyInput()
      .appendField('bottom tab:')
      .appendField(new Blockly.FieldDropdown(
        [
          ['NO_BAR', 'NO_BAR'],
          ['account', 'AccountCircle'],
          ['search', 'Search'],
          ['home', 'Home'],
          ['email', 'Email'],
          ['phone', 'Phone'],
          ['settings', 'Settings'],
          ['done', 'Done'],
          ['info', 'Info'],
          ['delete', 'Delete'],
          ['favorite', 'Favorite'],
          ['article', 'Article'],
          ['star', 'Star'],
          ['close', 'Close'],
          ['add', 'Add'],
        ]
      ), 'BOTTOM_TAB_ICON')
    this.appendStatementInput('SCREEN_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['screenWithBars'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_NAME')
  const content = Blockly.Kotlin.statementToCode(block, 'SCREEN_CONTENT')

  const modelListBlocks = block.getDescendants().slice(1).filter(child => 
    child.type === 'rowList' || child.type === 'columnList'
  )

  const code = []
  code.push(
    '@Composable',
    `fun ${screenName}(`,
    `${Blockly.Kotlin.INDENT}navController: NavController,`,
    `${Blockly.Kotlin.INDENT}mainViewModel: MainViewModel = hiltViewModel()`,
    `) {`
  )
  if (modelListBlocks.length > 0) {
    const usedModels = modelListBlocks.map(listBlock =>
      `${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}mainViewModel.readAll${listBlock.getFieldValue('MODEL_CLASS')}s()`
    )
    code.push(
      `${Blockly.Kotlin.INDENT}LaunchedEffect("${screenName}") {`,
      usedModels,
      `${Blockly.Kotlin.INDENT}}`
    )
  }
  code.push(
    `${content}`,
    '}'
  )

  // Newline character added, so that file where screen Composable is located would have extra trailing line.
  // This avoids frequent GitHub end of file warnings
  const codeToReturn = `${code.join('\n')}\n`

  return codeToReturn
}
