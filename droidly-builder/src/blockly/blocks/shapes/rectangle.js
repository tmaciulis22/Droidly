import Blockly from 'blockly'

Blockly.Blocks['rectangle'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Rectangle shape')
    this.appendDummyInput()
      .appendField('Rectangle')
    this.setOutput(true, 'Shape')
  }
}

Blockly.Kotlin['rectangle'] = () => {
  return ['RoundedCornerShape(0)', Blockly.Kotlin.ORDER_ATOMIC]
}
