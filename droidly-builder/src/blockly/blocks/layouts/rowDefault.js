import Blockly from 'blockly';

Blockly.Blocks['rowDefault'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Layouts children items in a row horizontally')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Row')
    this.appendStatementInput('ROW_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('ROW_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['rowDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ROW_MODIFIER')
  const content = Blockly.Kotlin.statementToCode(block, 'ROW_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Row(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
