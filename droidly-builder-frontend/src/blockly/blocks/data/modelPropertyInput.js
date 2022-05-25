import Blockly from 'blockly'
import { modelMenuGenerator, modelPropertyMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['modelPropertyInput'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Sets model\'s property to a value on each action (for example, text field\'s each on enter action)')
    this.appendDummyInput()
      .appendField('Set')
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
      ), 'MODEL_NAME')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(
        modelPropertyMenuGenerator(this)
      ), 'MODEL_INPUT_PROPERTY')
    this.setOutput(true, 'Action')
    this.setInputsInline(true)
  }
}

Blockly.Kotlin['modelPropertyInput'] = (block) => {
  const property = block.getFieldValue('MODEL_INPUT_PROPERTY')

  return [`item.${property} = it`, Blockly.Kotlin.ORDER_ATOMIC]
}
