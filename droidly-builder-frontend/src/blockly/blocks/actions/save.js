import Blockly from 'blockly'
import { modelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['save'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Saves a selected model with new properties. Also does an additional action if provided.')
    this.appendDummyInput()
      .appendField('Save')
      .appendField(new Blockly.FieldDropdown(
          modelMenuGenerator(this)
        ), 'MODEL_TO_SAVE')
      .appendField('then')
    this.appendValueInput('ADDITIONAL_ACTION')
      .setCheck('Action')
    this.setInputsInline(true)
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['save'] = (block) => {
  const modelToSave = block.getFieldValue('MODEL_TO_SAVE')
  const action = modelToSave !== 'NOT_SELECTED' ? `mainViewModel.save${modelToSave}(item)` : '// mainViewModel.save(item)'
  const nextAction = Blockly.Kotlin.valueToCode(block, 'ADDITIONAL_ACTION', Blockly.Kotlin.ORDER_ATOMIC)

  const codeToReturn = nextAction 
    ? `${action}\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}${nextAction}`
    : action

  return [codeToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
