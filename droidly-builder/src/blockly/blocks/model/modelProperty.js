import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'
import menuGenerator from './modelMenuGenerator'

Blockly.Blocks['modelProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a other model property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Model')
      .appendField(new Blockly.FieldDropdown(
        menuGenerator(this)
        ), 'MODEL_CLASS')
      .appendField(new Blockly.FieldTextInput('modelPropertyName'), 'MODEL_PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['modelProperty'] = (block) => {
  const propertyName = block.getFieldValue('MODEL_PROPERTY_NAME')
  const modelClass = block.getFieldValue('MODEL_CLASS')

  return `var ${camelCase(propertyName)}: ${modelClass}? = null`
}
