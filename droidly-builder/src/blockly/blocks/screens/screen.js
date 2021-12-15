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

  const code = []
  code.push(
    '@Composable',
    `fun ${screenName}(navController: NavController) {`,
    `${content}`,
    '}'
  )

  // Newline character added, so that file where screen Composable is located would have extra trailing line.
  // This avoids frequent GitHub end of file warnings
  const codeToReturn = `${code.join('\n')}\n`

  return codeToReturn
}
