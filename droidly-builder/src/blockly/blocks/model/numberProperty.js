import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'

Blockly.Blocks['numberProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a number(with floating point) property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Number')
      .appendField(new Blockly.FieldTextInput('numberPropertyName'), 'PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['numberProperty'] = (block) => {
  const propertyName = block.getFieldValue('PROPERTY_NAME')

  return `var ${camelCase(propertyName)}: Double? = null,`
}
