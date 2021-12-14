import Blockly from 'blockly';

Blockly.Blocks['columnDefault'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Layouts children items in a column vertically.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Column')
    this.appendStatementInput('COLUMN_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('COLUMN_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['columnDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'COLUMN_MODIFIER')
  const content = Blockly.Kotlin.statementToCode(block, 'COLUMN_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Column(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
