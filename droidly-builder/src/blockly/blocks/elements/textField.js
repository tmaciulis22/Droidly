import Blockly from 'blockly'

Blockly.Blocks['textField'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Text field accepting text input')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Text field')
    this.appendDummyInput()
      .appendField('placeholder:')
      .appendField(new Blockly.FieldTextInput('Placeholder text'), 'TEXT_FIELD_PLACEHOLDER')
    this.appendDummyInput()
      .appendField('max one line:')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'TEXT_FIELD_IS_ONE_LINE')
    this.appendValueInput('TEXT_FIELD_ON_SUBMIT')
      .setCheck('Action')
      .appendField('on submit:')
    this.appendValueInput('TEXT_FIELD_COLOR')
      .setCheck('Colour')
      .appendField('text field colour:')
    this.appendValueInput('TEXT_FIELD_TEXT_COLOR')
      .setCheck('Colour')
      .appendField('text colour:')
    this.appendValueInput('TEXT_FIELD_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
    this.appendValueInput('TEXT_FIELD_BORDER')
      .setCheck('Border')
      .appendField('border:')
    this.appendStatementInput('TEXT_FIELD_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['textField'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'TEXT_FIELD_MODIFIER')

  const singleLine = block.getFieldValue('TEXT_FIELD_IS_ONE_LINE') === 'TRUE' ? 'true' : 'false'

  const onSubmit = Blockly.Kotlin.valueToCode(block, 'TEXT_FIELD_ON_SUBMIT', Blockly.Kotlin.ORDER_ATOMIC) || null
  const placeholder = block.getFieldValue('TEXT_FIELD_PLACEHOLDER') || null
  const textFieldColor = Blockly.Kotlin.valueToCode(block, 'TEXT_FIELD_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const textColor = Blockly.Kotlin.valueToCode(block, 'TEXT_FIELD_TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const shape = Blockly.Kotlin.valueToCode(block, 'TEXT_FIELD_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || null
  const border = Blockly.Kotlin.valueToCode(block, 'TEXT_FIELD_BORDER', Blockly.Kotlin.ORDER_ATOMIC) || null

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyTextField(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}singleLine = ${singleLine},`
  )
  if (onSubmit) {
    code.push(`${Blockly.Kotlin.INDENT}onSubmit = ${onSubmit},`)
  }
  if (placeholder) {
    code.push(`${Blockly.Kotlin.INDENT}placeholder = "${placeholder}",`)
  }
  if (textFieldColor) {
    code.push(`${Blockly.Kotlin.INDENT}color = ${textFieldColor},`)
  }
  if (textColor) {
    code.push(`${Blockly.Kotlin.INDENT}textColor = ${textColor},`)
  }
  if (shape) {
    code.push(`${Blockly.Kotlin.INDENT}shape = ${shape},`)
  }
  if (border) {
    code.push(`${Blockly.Kotlin.INDENT}border = ${border},`)
  }
  code.push(')')

  return code.join('\n')
}
