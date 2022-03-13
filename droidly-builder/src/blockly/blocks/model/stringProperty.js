import Blockly from 'blockly'
import camelize from '../../../util/camelize'

Blockly.Blocks['stringProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a string(text) property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('String')
      .appendField(new Blockly.FieldTextInput('STRING_PROPERTY_NAME'), 'STRING_PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['stringProperty'] = (block) => {
  const propertyName = block.getFieldValue('STRING_PROPERTY_NAME')

  return `var ${camelize(propertyName)}: String`
}
