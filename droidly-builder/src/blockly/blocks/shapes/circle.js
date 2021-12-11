import Blockly from 'blockly'

Blockly.Blocks['circle'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Circle shape used for defining UI element\'s background or form')
    this.appendDummyInput()
      .appendField('Circle')
    this.setOutput(true, 'Shape')
  }
}

Blockly.Kotlin['circle'] = () => {
  return ['RoundedCornerShape(50)', Blockly.Kotlin.ORDER_ATOMIC]
}
