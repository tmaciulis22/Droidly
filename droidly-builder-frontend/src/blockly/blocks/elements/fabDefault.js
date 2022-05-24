import Blockly from 'blockly'
import { iconMenuGenerator } from '../../../util/menuGenerators';

Blockly.Blocks['fabDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Floating action button with custom on click action')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('FAB')
      .appendField(new Blockly.FieldDropdown(iconMenuGenerator), 'FAB_ICON')
    this.appendValueInput('FAB_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('FAB_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['fabDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'FAB_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'FAB_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || ''
  const imageVector = `Icons.Default.${block.getFieldValue('FAB_ICON')}`

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
    ')'
  )

  return code.join('\n')
}
