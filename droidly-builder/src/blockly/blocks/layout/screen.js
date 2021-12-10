import Blockly from 'blockly';

Blockly.Blocks['screen'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Defines app screen') // TODO might need to add checkbox for navigation controller
    this.appendDummyInput()
      .appendField('Screen')
    this.appendDummyInput()
      .appendField('name:')
      .appendField(new Blockly.FieldTextInput('NameOfScreen'), 'SCREEN_NAME')
    this.appendStatementInput('SCREEN_CONTENT')
      .appendField('content:')
      .setCheck(['']) // TODO add type checks
  }
}

Blockly.Kotlin['screen'] = function (block) {
  // TODO might need to conditionally add navigation controller
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
