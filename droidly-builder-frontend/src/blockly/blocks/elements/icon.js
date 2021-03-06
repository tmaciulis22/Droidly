import Blockly from 'blockly';
import { iconMenuGenerator } from '../../../util/menuGenerators';


Blockly.Blocks['icon'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an icon from a list')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Icon')
      .appendField(new Blockly.FieldDropdown(iconMenuGenerator), 'ICON_ICON')
    this.appendValueInput('ICON_COLOR')
      .setCheck('Colour')
      .appendField('colour:')
    this.appendStatementInput('ICON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['icon'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ICON_MODIFIER')
  const color = Blockly.Kotlin.valueToCode(block, 'ICON_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const imageVector = `Icons.Default.${block.getFieldValue('ICON_ICON')}`

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyIcon(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}imageVector = ${imageVector},`,
  )
  
  if (color) {
    code.push(`${Blockly.Kotlin.INDENT}tint = ${color},`)
  }
  code.push(')')

  return code.join('\n')
}
