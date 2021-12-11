import Blockly from 'blockly'

Blockly.Blocks['roundedRectangle'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Rectangle shape with rounded corners used for defining UI element\'s background or form')
    this.appendDummyInput()
      .appendField('Rounded rectangle')
    this.appendDummyInput()
      .appendField('rounding percentage:')
      .appendField(new Blockly.FieldNumber(20, 1, 100, 1), 'ROUNDING_PERCENTAGE')
    this.setOutput(true, 'Shape')
  }
}

Blockly.Kotlin['roundedRectangle'] = (block) => {
  const percent = block.getFieldValue('ROUNDING_PERCENTAGE') || '20'

  return [`RoundedCornerShapeRectangleShape(percent = ${percent})`, Blockly.Kotlin.ORDER_ATOMIC]
}
