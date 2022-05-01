import Blockly from 'blockly';

Blockly.Blocks['textDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Displays a text')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendValueInput('TEXT_INPUT')
      .appendField('Text')
    this.appendStatementInput('TEXT_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['textDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'TEXT_MODIFIER')
  const text = `${Blockly.Kotlin.valueToCode(block, 'TEXT_INPUT', Blockly.Kotlin.ORDER_ATOMIC) || ''}`
  const formattedText = text.includes('item.') ? text : `"${text}"`

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyText(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}text = ${formattedText},`,
    ')'
  )

  return code.join('\n')
}
