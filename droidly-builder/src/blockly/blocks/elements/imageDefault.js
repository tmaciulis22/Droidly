import Blockly from 'blockly';

Blockly.Blocks['imageDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an image from URL.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Image')
    this.appendDummyInput()
      .appendField('url:')
      .appendField(new Blockly.FieldTextInput(''), 'IMAGE_URL')
    this.appendStatementInput('IMAGE_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['imageDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'IMAGE_MODIFIER')
  const url = block.getFieldValue('IMAGE_URL') || 'null'

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyImage(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}url = ${url},`,
    ')'
  )

  return code.join('\n')
}
