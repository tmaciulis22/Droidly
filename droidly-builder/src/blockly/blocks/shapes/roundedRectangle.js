import Blockly from 'blockly'

Blockly.Blocks['roundedRectangle'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Rectangle shape with rounded corners (in percentage)')
    this.appendDummyInput()
      .appendField('Rounded rectangle')
      .appendField(new Blockly.FieldNumber(20, 1, 100, 1), 'ROUNDING_PERCENTAGE')
    this.setOutput(true, 'Shape')
  }
}

Blockly.Kotlin['roundedRectangle'] = (block) => {
  const percent = block.getFieldValue('ROUNDING_PERCENTAGE') || '20'

  return [`RoundedCornerShape(percent = ${percent})`, Blockly.Kotlin.ORDER_ATOMIC]
}
