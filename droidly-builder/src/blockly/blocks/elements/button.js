import Blockly from 'blockly'

Blockly.Blocks['button'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Button with custom on click action')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Button')
      .appendField('text:')
      .appendField(new Blockly.FieldTextInput('Click me'), 'BUTTON_TEXT')
    this.appendValueInput('BUTTON_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendValueInput('BUTTON_TEXT_COLOR')
      .setCheck('Colour')
      .appendField('text colour:')
    this.appendValueInput('BUTTON_COLOR')
      .setCheck('Colour')
      .appendField('button colour:')
    this.appendValueInput('BUTTON_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
    this.appendValueInput('BUTTON_BORDER')
      .setCheck('Border')
      .appendField('border:')
    this.appendStatementInput('BUTTON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['button'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BUTTON_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'BUTTON_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || '{}'
  const text = `"${block.getFieldValue('BUTTON_TEXT')}"` || '""'

  const textColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const buttonColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const shape = Blockly.Kotlin.valueToCode(block, 'BUTTON_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || null
  const border = Blockly.Kotlin.valueToCode(block, 'BUTTON_BORDER', Blockly.Kotlin.ORDER_ATOMIC) || null

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyButton(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}onClick = { ${onClick} },`,
    `${Blockly.Kotlin.INDENT}text = ${text},`,
  )

  if (buttonColor) {
    code.push(`${Blockly.Kotlin.INDENT}buttonColor = ${buttonColor},`)
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
