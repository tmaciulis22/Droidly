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
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['save'] = (block) => {
  const modelToDelete = block.getFieldValue('MODEL_TO_SAVE')
  const actionToReturn = modelToDelete !== 'NOT_SELECTED' ? `mainViewModel.save${modelToDelete}(item)` : '// mainViewModel.save(item)'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
