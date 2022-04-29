import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'
import { modelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['columnList'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Content list in a column direction.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Column list of')
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
        ), 'MODEL_CLASS')
    this.appendStatementInput('COLUMN_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('COLUMN_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['columnList'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'COLUMN_MODIFIER')
  const content = Blockly.Kotlin.statementToCode(block, 'COLUMN_CONTENT')
  const model = block.getFieldValue('MODEL_CLASS')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyLazyColumn(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}dataList = mainViewModel.mainState.${camelCase(model)}s`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
