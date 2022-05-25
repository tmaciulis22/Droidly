import Blockly from 'blockly'
import { modelMenuGenerator, modelPropertyMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['modelPropertyOutput'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Displays a model property or an optional default value if a block is provided.')
    this.appendDummyInput()
      .appendField('Get')
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
      ), 'MODEL_NAME')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(
        modelPropertyMenuGenerator(this)
      ), 'MODEL_OUTPUT_PROPERTY')
      .appendField('or')
    this.appendValueInput('DEFAULT_VALUE')
      .setCheck(['ModelProperty', 'Text', 'url'])
    this.setInputsInline(true)
    this.setOutput(true, 'ModelProperty')
  }
}

Blockly.Kotlin['modelPropertyOutput'] = (block) => {
  const property = block.getFieldValue('MODEL_OUTPUT_PROPERTY')
  const defaultValue = Blockly.Kotlin.valueToCode(block, 'DEFAULT_VALUE', Blockly.Kotlin.ORDER_ATOMIC) || `"-"`

  return [`item.${property}?.toString() ?: ${defaultValue}`, Blockly.Kotlin.ORDER_ATOMIC]
}
