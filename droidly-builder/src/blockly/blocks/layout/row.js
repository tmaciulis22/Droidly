import Blockly from 'blockly';

Blockly.Blocks['row'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Layouts children items in a row')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Row')
    this.appendStatementInput('ROW_MODIFIER')
      .appendField('styling:')
    this.appendStatementInput('ROW_CONTENT')
      .appendField('content:')
      .setCheck(['']) // TODO add type checks
  }
}

Blockly.Kotlin['row'] = function (block) {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ROW_MODIFIER') || ''
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
