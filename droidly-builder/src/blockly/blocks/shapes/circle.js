import Blockly from 'blockly'

Blockly.Blocks['circle'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Circle shape')
    this.appendDummyInput()
      .appendField('Circle')
    this.setOutput(true, 'Shape')
  }
}

Blockly.Kotlin['circle'] = () => {
  return ['RoundedCornerShape(50)', Blockly.Kotlin.ORDER_ATOMIC]
}
