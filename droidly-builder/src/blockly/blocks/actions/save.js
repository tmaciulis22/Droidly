import Blockly from 'blockly'
import { modelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['save'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Saves a selected model with new properties.')
    this.appendDummyInput()
      .appendField('Save')
      .appendField(new Blockly.FieldDropdown(
          modelMenuGenerator(this)
        ), 'MODEL_TO_SAVE')
    this.appendValueInput('NAVIGATION_ACTION')
      .setCheck('Action')
    this.setInputsInline(true)
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['save'] = (block) => {
  const modelToDelete = block.getFieldValue('MODEL_TO_SAVE')
  const action = modelToDelete !== 'NOT_SELECTED' ? `mainViewModel.save${modelToDelete}(item)` : '// mainViewModel.save(item)'
  const nextAction = Blockly.Kotlin.valueToCode(block, 'NAVIGATION_ACTION', Blockly.Kotlin.ORDER_ATOMIC)

  const codeToReturn = nextAction 
    ? `\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}${action}\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}${nextAction}\n${Blockly.Kotlin.INDENT}`
    : action

  return [codeToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
