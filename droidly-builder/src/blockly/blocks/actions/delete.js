import Blockly from 'blockly'
import { modelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['delete'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Deletes a selected model')
    this.appendDummyInput()
      .appendField('Delete')
      .appendField(new Blockly.FieldDropdown(
          modelMenuGenerator(this)
        ), 'MODEL_TO_DELETE')
    this.appendValueInput('NAVIGATION_ACTION')
      .setCheck('Action')
    this.setInputsInline(true)
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['delete'] = (block) => {
  const modelToDelete = block.getFieldValue('MODEL_TO_DELETE')
  const action = modelToDelete !== 'NOT_SELECTED' ? `mainViewModel.delete${modelToDelete}(item)` : '// mainViewModel.delete(item)'
  const nextAction = Blockly.Kotlin.valueToCode(block, 'NAVIGATION_ACTION', Blockly.Kotlin.ORDER_ATOMIC)

  const codeToReturn = nextAction 
    ? `\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}${action}\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}${nextAction}\n${Blockly.Kotlin.INDENT}`
    : action

  return [codeToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
