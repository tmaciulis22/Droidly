import Blockly from 'blockly';

Blockly.Blocks['text'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Displays a text')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Text')
      .appendField(new Blockly.FieldMultilineInput('Lorem ipsum'), 'TEXT_STRING')
    this.appendDummyInput()
      .appendField('size:')
      .appendField(new Blockly.FieldNumber(16, 1, 164, 1), 'TEXT_SIZE')
      .appendField('weight:')
      .appendField(new Blockly.FieldNumber(400, 100, 900, 100), 'TEXT_WEIGHT')
      .appendField('max one line:')
      .appendField(new Blockly.FieldCheckbox(), 'IS_ONE_LINE')
    this.appendValueInput('TEXT_COLOR')
      .appendField('colour:')
    this.appendStatementInput('TEXT_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['text'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'TEXT_MODIFIER')
  const text = `"${block.getFieldValue('TEXT_STRING')}"`
  const color = Blockly.Kotlin.valueToCode(block, 'TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const size = block.getFieldValue('TEXT_SIZE') ? `${block.getFieldValue('TEXT_SIZE')}.sp` : null
  const weight = block.getFieldValue('TEXT_WEIGHT') ? `FontWeight.W${block.getFieldValue('TEXT_WEIGHT')}` : null
  const maxOneLine = block.getFieldValue('IS_ONE_LINE') === 'TRUE' ? 1 : null

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
    `${Blockly.Kotlin.INDENT}text = ${text},`
  )

  if (color) {
    code.push(`${Blockly.Kotlin.INDENT}color = ${color},`)
  }
  if (size) {
    code.push(`${Blockly.Kotlin.INDENT}fontSize = ${size},`)
  }
  if (weight) {
    code.push(`${Blockly.Kotlin.INDENT}fontWeight = ${weight},`)
  }
  if (maxOneLine) {
    code.push(`${Blockly.Kotlin.INDENT}maxLines = ${maxOneLine},`,)
  }
  code.push(')')

  return code.join('\n')
}
