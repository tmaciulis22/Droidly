import Blockly from 'blockly'
import { modelMenuGenerator, modelPropertyMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['modelPropertyOutput'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Displays a model property')
    this.appendDummyInput()
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
      ), 'MODEL_OUTPUT_NAME')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(
        modelPropertyMenuGenerator(this)
      ), 'MODEL_OUTPUT_PROPERTY')
    this.setOutput(true, 'ModelProperty')
  }
}

Blockly.Kotlin['modelPropertyOutput'] = (block) => {
  const modelName = block.getFieldValue('MODEL_OUTPUT_NAME')
  const property = block.getFieldValue('MODEL_OUTPUT_PROPERTY')

  return [`(item as? ${modelName})?.${property}.toString()`, Blockly.Kotlin.ORDER_ATOMIC]
}
