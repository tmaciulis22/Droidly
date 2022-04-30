import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'

Blockly.Blocks['booleanProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a boolean flag property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Boolean')
      .appendField(new Blockly.FieldTextInput('booleanPropertyName'), 'PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['booleanProperty'] = (block) => {
  const propertyName = block.getFieldValue('PROPERTY_NAME')

  return `var ${camelCase(propertyName)}: Boolean? = null,`
}
