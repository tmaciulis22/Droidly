import Blockly from 'blockly';

Blockly.Blocks['screen'] = {
  init: function() {
    this.setColour(20)
    this.setTooltip('Defines app screen.')
    this.appendDummyInput()
      .appendField('Screen')
      .appendField(new Blockly.FieldTextInput('NameOfScreen'), 'SCREEN_NAME')
    this.appendStatementInput('SCREEN_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['screen'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_NAME')
  const content = Blockly.Kotlin.statementToCode(block, 'SCREEN_CONTENT')

  // TODO add creator block
  const modelListBlocks = block.getDescendants().slice(1).filter(child => 
    child.type === 'rowList' || child.type === 'columnList'
  )
  const usedModels = modelListBlocks.map(listBlock =>
    `${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}mainViewModel.readAll${listBlock.getFieldValue('MODEL_CLASS')}s()`
  ).join('\n')

  const code = []
  code.push(
    '@Composable',
    `fun ${screenName} (`,
    `${Blockly.Kotlin.INDENT}navController: NavController,`,
    `${Blockly.Kotlin.INDENT}mainViewModel: MainViewModel = hiltViewModel()`,
    `) {`,
    `${Blockly.Kotlin.INDENT}LaunchedEffect("${screenName}") {`,
    usedModels,
    `${Blockly.Kotlin.INDENT}}`,
    `${Blockly.Kotlin.INDENT}DroidlyLoadingBar(isLoading = mainViewModel.mainState.isLoading)`,
    `${content}`,
    `}`
  )

  // Newline character added, so that file where screen Composable is located would have extra trailing line.
  // This avoids frequent GitHub end of file warnings
  const codeToReturn = `${code.join('\n')}\n`

  return codeToReturn
}
