import Blockly from 'blockly'

Blockly.Blocks['button'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Button with custom on click action, optional shape, colour and border')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Button')
    this.appendDummyInput()
      .appendField('text:')
      .appendField(new Blockly.FieldTextInput('Click me'), 'BUTTON_TEXT')
    this.appendValueInput('BUTTON_TEXT_COLOR')
      .setCheck('Colour')
      .appendField('text colour:')
    this.appendValueInput('BUTTON_COLOR')
      .setCheck('Colour')
      .appendField('colour:')
    this.appendValueInput('BUTTON_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
    this.appendDummyInput()
      .appendField('border width:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'BUTTON_BORDER_WIDTH')
    this.appendValueInput('BUTTON_BORDER_COLOR')
      .setCheck('Colour')
      .appendField('border colour:')
    this.appendStatementInput('BUTTON_MODIFIER')
      .appendField('styling:')
    this.appendValueInput('BUTTON_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
  }
}

Blockly.Kotlin['button'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BUTTON_MODIFIER')
  const shape = Blockly.Kotlin.valueToCode(block, 'BUTTON_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.shapes.small'
  const onClick = Blockly.Kotlin.valueToCode(block, 'BUTTON_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || '{}'
  const textColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const buttonColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const borderWidth = `${block.getFieldValue('BUTTON_BORDER_WIDTH')}.dp` || null
  const borderColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_BORDER_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const text = `"${block.getFieldValue('BUTTON_TEXT')}"` || '""'

  const buttonColors = `ButtonDefaults.buttonColors(${buttonColor || 'MaterialTheme.colors.primary'}, ${textColor || 'MaterialTheme.colors.onPrimary'})`
  let border = 'null'
  if (borderWidth && borderColor) {
    border = `BorderStroke(${borderWidth}, ${borderColor})`
  }

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Button(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}shape = ${shape}`,
    `${Blockly.Kotlin.INDENT}colors = ${buttonColors}`,
    `${Blockly.Kotlin.INDENT}border = ${border}`,
    `${Blockly.Kotlin.INDENT}onClick = ${onClick}`,
    ') {',
    `${Blockly.Kotlin.INDENT}Text(text = ${text}, style = MaterialTheme.typography.button)`,
    '}'
  )

  return code.join('\n')
}
