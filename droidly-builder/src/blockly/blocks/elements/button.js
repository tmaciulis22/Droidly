import Blockly from 'blockly'

Blockly.Blocks['button'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Button with custom on click action')
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
    this.appendValueInput('BUTTON_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('BUTTON_MODIFIER')
      .appendField('styling:')
  }
}

Blockly.Kotlin['button'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BUTTON_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'BUTTON_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || '{}'
  const textColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const buttonColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const text = `"${block.getFieldValue('BUTTON_TEXT')}"` || '""'

  const buttonColors = `ButtonDefaults.buttonColors(${buttonColor || 'MaterialTheme.colors.primary'}, ${textColor || 'MaterialTheme.colors.onPrimary'})`

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
    `${Blockly.Kotlin.INDENT}colors = ${buttonColors}`,
    `${Blockly.Kotlin.INDENT}onClick = ${onClick}`,
    ') {',
    `${Blockly.Kotlin.INDENT}Text(text = ${text}, style = MaterialTheme.typography.button)`,
    '}'
  )

  return code.join('\n')
}
