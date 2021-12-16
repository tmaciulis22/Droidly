import Blockly from 'blockly';

Blockly.Blocks['image'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an image from URL with opacity (0-100)')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Image')
    this.appendDummyInput()
      .appendField('url:')
      .appendField(new Blockly.FieldTextInput(''), 'IMAGE_URL')
    this.appendDummyInput()
      .appendField('opacity:')
      .appendField(new Blockly.FieldNumber(100, 0, 100, 1), 'IMAGE_ALPHA')
    this.appendStatementInput('IMAGE_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['image'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'IMAGE_MODIFIER')
  const url = block.getFieldValue('IMAGE_URL') || null
  const urlString = url ? `"${url}"` : 'null'
  const opacity = `${Number(block.getFieldValue('IMAGE_ALPHA')) / 100}f` || '1.0f'

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
    `${Blockly.Kotlin.INDENT}url = ${urlString},`,
    `${Blockly.Kotlin.INDENT}alpha = ${opacity},`,
    ')'
  )

  return code.join('\n')
}
