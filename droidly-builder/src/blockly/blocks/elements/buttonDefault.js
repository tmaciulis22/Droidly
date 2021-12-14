import Blockly from 'blockly'

Blockly.Blocks['buttonDefault'] = {
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
    this.appendStatementInput('BUTTON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['buttonDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BUTTON_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'BUTTON_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || '{}'
  const text = `"${block.getFieldValue('BUTTON_TEXT')}"` || '""'

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
    `${Blockly.Kotlin.INDENT}onClick = ${onClick},`,
    `${Blockly.Kotlin.INDENT}text = ${text},`,
    ')'
  )

  return code.join('\n')
}
