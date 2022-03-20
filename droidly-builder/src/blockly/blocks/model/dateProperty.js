import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'

Blockly.Blocks['dateProperty'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Adds a date property to data model.')
    this.setPreviousStatement(true)
    this.appendDummyInput()
      .appendField('Date')
      .appendField(new Blockly.FieldTextInput('datePropertyName'), 'DATE_PROPERTY_NAME')
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['dateProperty'] = (block) => {
  const propertyName = block.getFieldValue('DATE_PROPERTY_NAME')

  return `var ${camelCase(propertyName)}: Date? = null`
}
