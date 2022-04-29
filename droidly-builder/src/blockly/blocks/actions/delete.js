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
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['delete'] = (block) => {
  const modelToDelete = block.getFieldValue('MODEL_TO_DELETE')
  const actionToReturn = modelToDelete !== 'NOT_SELECTED' ? `mainViewModel.delete${modelToDelete}(item)` : '// mainViewModel.delete(item)'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
