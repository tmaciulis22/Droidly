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
  const shape = Blockly.Kotlin.valueToCode(block, 'BUTTON_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.shapes.small'
  const border = Blockly.Kotlin.valueToCode(block, 'BUTTON_BORDER', Blockly.Kotlin.ORDER_ATOMIC) || 'null'

  const buttonColors = `ButtonDefaults.buttonColors(${buttonColor || 'MaterialTheme.colors.primary'}, ${textColor || 'MaterialTheme.colors.onPrimary'})`

  const code = []
  code.push(
    'Button(',
    `${Blockly.Kotlin.INDENT}modifier = ${addedModifiers}`,
    `${Blockly.Kotlin.INDENT}onClick = ${onClick}`,
    `${Blockly.Kotlin.INDENT}colors = ${buttonColors}`,
    `${Blockly.Kotlin.INDENT}shape = ${shape}`,
    `${Blockly.Kotlin.INDENT}border = ${border}`,
    ') {',
    `${Blockly.Kotlin.INDENT}Text(text = ${text}, style = MaterialTheme.typography.button)`,
    '}'
  )

  return code.join('\n')
}
