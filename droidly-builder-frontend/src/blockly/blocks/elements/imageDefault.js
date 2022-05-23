import Blockly from 'blockly';

Blockly.Blocks['imageDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an image from URL.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Image')
    this.appendValueInput('TEXT_INPUT')
      .appendField('url:')
    this.appendStatementInput('IMAGE_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['imageDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'IMAGE_MODIFIER')
  const url = `${Blockly.Kotlin.valueToCode(block, 'TEXT_INPUT', Blockly.Kotlin.ORDER_ATOMIC) || ''}`
  const formattedUrl = url.includes('item.') ? url : url.includes("mainViewModel.picUri") ? 'mainViewModel.picUri' : `"${url}"`

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
    `${Blockly.Kotlin.INDENT}url = ${formattedUrl},`,
    ')'
  )

  return code.join('\n')
}
