import Blockly from 'blockly'
import { modelMenuGenerator, modelPropertyMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['modelPropertyInputTo'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Marks the element that on some action it should update model property with specified value. Also does an additional action if provided.')
    this.appendDummyInput()
      .appendField('Set')
      .appendField(new Blockly.FieldDropdown(
        modelMenuGenerator(this)
      ), 'MODEL_NAME')
      .appendField('property')
      .appendField(new Blockly.FieldDropdown(
        modelPropertyMenuGenerator(this)
      ), 'MODEL_INPUT_PROPERTY')
      .appendField('to')
    this.appendValueInput('VALUE_TO_UPDATE_WITH')
      .setCheck(['ModelProperty', 'Text', 'url'])
    this.appendDummyInput()
        .appendField('then')
    this.appendValueInput('ADDITIONAL_ACTION')
      .setCheck('Action')
    this.setOutput(true, 'Action')
    this.setInputsInline(true)
  }
}

Blockly.Kotlin['modelPropertyInputTo'] = (block) => {
  const property = block.getFieldValue('MODEL_INPUT_PROPERTY')
  const updateWith = Blockly.Kotlin.valueToCode(block, 'VALUE_TO_UPDATE_WITH', Blockly.Kotlin.ORDER_ATOMIC)
  const nextAction = Blockly.Kotlin.valueToCode(block, 'ADDITIONAL_ACTION', Blockly.Kotlin.ORDER_ATOMIC)

  const valueToSet =  updateWith || 'it'
  const formattedValue = valueToSet.includes('.') || valueToSet === 'it' ? valueToSet : `"${valueToSet}"`

  let code = ""

  if (nextAction) {
    code = `\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}item.${property} = ${formattedValue}\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}`
    if (formattedValue.includes('mainViewModel.picUri')) {
      code = code + `mainViewModel.setPicUri("")\n${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}`
    }
    code = code + `${nextAction}\n${Blockly.Kotlin.INDENT}`
  } else {
    code = `item.${property} = ${formattedValue}`
  }

  return [code, Blockly.Kotlin.ORDER_ATOMIC]
}
