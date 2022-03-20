import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'
import menuGenerator from './modelMenuGenerator'

Blockly.Blocks['modelsListProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a list of other models property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Models list')
      .appendField(new Blockly.FieldDropdown(
        menuGenerator(this)
        ), 'MODEL_CLASS')
      .appendField(new Blockly.FieldTextInput('modelsListPropertyName'), 'MODELS_LIST_PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['modelsListProperty'] = (block) => {
  const propertyName = block.getFieldValue('MODELS_LIST_PROPERTY_NAME')
  const modelClass = block.getFieldValue('MODEL_CLASS')

  return `val ${camelCase(propertyName)}: MutableList<${modelClass}> = mutableListOf()`
}
