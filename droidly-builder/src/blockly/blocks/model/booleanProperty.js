import Blockly from 'blockly'
import camelize from '../../../util/camelize'

Blockly.Blocks['booleanProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a boolean flag property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Boolean')
      .appendField(new Blockly.FieldTextInput('BOOLEAN_PROPERTY_NAME'), 'BOOLEAN_PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['booleanProperty'] = (block) => {
  const propertyName = block.getFieldValue('BOOLEAN_PROPERTY_NAME')

  return `var ${camelize(propertyName)}: Boolean`
}
