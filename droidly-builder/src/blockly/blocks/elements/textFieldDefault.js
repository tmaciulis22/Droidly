import Blockly from 'blockly'

Blockly.Blocks['textFieldDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Text field accepting text input')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Text field')
    this.appendValueInput('TEXT_INPUT')
      .appendField('placeholder:')
    this.appendDummyInput()
      .appendField('max one line:')
      .appendField(new Blockly.FieldCheckbox('TRUE'), 'TEXT_FIELD_IS_ONE_LINE')
    this.appendValueInput('TEXT_FIELD_ON_ENTER')
      .setCheck('Action')
      .appendField('on submit:')
    this.appendStatementInput('TEXT_FIELD_MODIFIER')
      .appendField('modifier:')
    this.setInputsInline(false)
  }
}

Blockly.Kotlin['textFieldDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'TEXT_FIELD_MODIFIER')

  const onEnter = Blockly.Kotlin.valueToCode(block, 'TEXT_FIELD_ON_ENTER', Blockly.Kotlin.ORDER_ATOMIC) || '{}'
  const placeholder = `"${Blockly.Kotlin.valueToCode(block, 'TEXT_INPUT', Blockly.Kotlin.ORDER_ATOMIC) || ''}"`

  const singleLine = block.getFieldValue('TEXT_FIELD_IS_ONE_LINE') === 'TRUE' ? 'true' : 'false'

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
    `${Blockly.Kotlin.INDENT}placeholder = ${placeholder},`,
    `${Blockly.Kotlin.INDENT}singleLine = ${singleLine},`,
    `${Blockly.Kotlin.INDENT}onEnter = ${onEnter},`,
    ')',
  )

  return code.join('\n')
}
