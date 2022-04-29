import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'
import { modelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['rowList'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Content list in a row direction.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Row list of')
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
        ), 'MODEL_CLASS')
    this.appendStatementInput('ROW_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('ROW_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['rowList'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ROW_MODIFIER')
  const content = Blockly.Kotlin.statementToCode(block, 'ROW_CONTENT')
  const model = block.getFieldValue('MODEL_CLASS')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyLazyRow(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}dataList = mainViewModel.mainState.${camelCase(model)}s`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
