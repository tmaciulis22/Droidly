import Blockly from 'blockly';
import { iconMenuGenerator } from '../../../util/menuGenerators';

Blockly.Blocks['iconButton'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an icon button with an icon from the list')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Icon Button')
      .appendField(new Blockly.FieldDropdown(iconMenuGenerator), 'ICON_BUTTON_ICON')
    this.appendValueInput('ICON_BUTTON_COLOR')
      .setCheck('Colour')
      .appendField('icon colour:')
    this.appendValueInput('ICON_BUTTON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('ICON_BUTTON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['iconButton'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ICON_BUTTON_MODIFIER')
  const color = Blockly.Kotlin.valueToCode(block, 'ICON_BUTTON_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const imageVector = `Icons.Default.${block.getFieldValue('ICON_BUTTON_ICON')}`
  const onClick = Blockly.Kotlin.valueToCode(block, 'ICON_BUTTON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || '{}'

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyIconButton(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}imageVector = ${imageVector},`,
    `${Blockly.Kotlin.INDENT}onClick = { ${onClick} },`
  )

  if (color) {
    code.push(`${Blockly.Kotlin.INDENT}tint = ${color},`)
  }
  code.push(')')

  return code.join('\n')
}
