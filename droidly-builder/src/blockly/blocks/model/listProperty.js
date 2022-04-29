import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'
import { listMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['listProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a list of properties to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('List of')
      .appendField(new Blockly.FieldDropdown(
        listMenuGenerator(this)
        ), 'PROPERTY_TYPE')
      .appendField(new Blockly.FieldTextInput('listPropertyName'), 'PROPERTY_NAME')

    this.setNextStatement(true)
  }
}

Blockly.Kotlin['listProperty'] = (block) => {
  const propertyName = block.getFieldValue('PROPERTY_NAME')
  const propertyType = block.getFieldValue('PROPERTY_TYPE')

  return `val ${camelCase(propertyName)}: MutableList<${propertyType}> = mutableListOf()`
}
