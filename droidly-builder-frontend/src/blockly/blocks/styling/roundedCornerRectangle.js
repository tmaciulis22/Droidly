import Blockly from 'blockly'

Blockly.Blocks['roundedCornerRectangle'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Rectangle shape with rounded corners (in percentage). 0% - simple rectangle, 100% - fully rounded rectangle')
    this.appendDummyInput()
      .appendField('Rectangle shape')
    this.appendDummyInput()
      .appendField('corner radius:')
      .appendField(new Blockly.FieldNumber(0, 0, 100, 1), 'ROUNDING_PERCENTAGE')
    this.setOutput(true, 'Shape')
  }
}

Blockly.Kotlin['roundedCornerRectangle'] = (block) => {
  const percent = block.getFieldValue('ROUNDING_PERCENTAGE') || '0'

  return [`RoundedCornerShape(percent = ${percent})`, Blockly.Kotlin.ORDER_ATOMIC]
}
