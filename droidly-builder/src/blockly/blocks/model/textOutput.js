import Blockly from 'blockly'

Blockly.Blocks['textOutput'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Outputs a text')
    this.appendDummyInput()
      .appendField(new Blockly.FieldMultilineInput('Lorem Ipsum'), 'TEXT_OUTPUT')
    this.setOutput(true, 'Text')
  }
}

Blockly.Kotlin['textOutput'] = (block) => {
  return [block.getFieldValue('TEXT_OUTPUT'), Blockly.Kotlin.ORDER_ATOMIC]
}
