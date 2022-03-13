import Blockly from 'blockly'
import camelize from '../../../util/camelize'

Blockly.Blocks['numberProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a number(with floating point) property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Number')
      .appendField(new Blockly.FieldTextInput('NUMBER_PROPERTY_NAME'), 'NUMBER_PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['numberProperty'] = (block) => {
  const propertyName = block.getFieldValue('NUMBER_PROPERTY_NAME')

  return `var ${camelize(propertyName)}: Double`
}
