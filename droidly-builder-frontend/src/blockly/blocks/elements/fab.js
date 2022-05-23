import Blockly from 'blockly'
import { iconMenuGenerator } from '../../../util/menuGenerators';

Blockly.Blocks['fab'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Floating action button with custom on click action')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('FAB')
      .appendField(new Blockly.FieldDropdown(iconMenuGenerator), 'FAB_ICON')
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
    this.appendStatementInput('BUTTON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['fab'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BUTTON_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'BUTTON_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || ''
  const imageVector = `Icons.Default.${block.getFieldValue('ICON_BUTTON_ICON')}`

  const textColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const buttonColor = Blockly.Kotlin.valueToCode(block, 'BUTTON_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const shape = Blockly.Kotlin.valueToCode(block, 'BUTTON_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || null

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyFAB(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}onClick = { ${onClick} },`,
    `${Blockly.Kotlin.INDENT}imageVector = ${imageVector},`,
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
  code.push(')')

  return code.join('\n')
}
