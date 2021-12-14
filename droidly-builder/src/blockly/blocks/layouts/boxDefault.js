import Blockly from 'blockly';

Blockly.Blocks['boxDefault'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Stacks children items on top of each other in a box. Last added content block will be on top.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Box')
    this.appendStatementInput('BOX_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('BOX_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['boxDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BOX_MODIFIER')
  const content = Blockly.Kotlin.statementToCode(block, 'BOX_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Box(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
