import Blockly from 'blockly'

Blockly.Blocks['fillMaxWidth'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Forces element to fill all available width')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Fill width')
  }
}

Blockly.Kotlin['fillMaxWidth'] = () => {
  return `${Blockly.Kotlin.INDENT}.fillMaxWidth()`
}
