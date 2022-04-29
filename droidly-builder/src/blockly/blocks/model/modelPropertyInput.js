import Blockly from 'blockly'
import { modelMenuGenerator, modelPropertyMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['modelPropertyInput'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Marks the element that on any action it should update model property')
    this.appendDummyInput()
      .appendField('Set')
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
      ), 'MODEL_INPUT_NAME')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(
        modelPropertyMenuGenerator(this)
      ), 'MODEL_INPUT_PROPERTY')
      
    this.setOutput(true, 'ModelProperty')
  }
}

Blockly.Kotlin['modelPropertyInput'] = (block) => {
  const modelName = block.getFieldValue('MODEL_INPUT_NAME')
  const property = block.getFieldValue('MODEL_INPUT_PROPERTY')

  return [`(item as? ${modelName}).${property} = it`, Blockly.Kotlin.ORDER_ATOMIC]
}
