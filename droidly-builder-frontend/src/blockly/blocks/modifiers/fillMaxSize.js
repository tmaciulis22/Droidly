import Blockly from 'blockly'

Blockly.Blocks['fillMaxSize'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Forces element to fill all available space both vertically and horizontally')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Fill all space')
  }
}

Blockly.Kotlin['fillMaxSize'] = () => {
  return `${Blockly.Kotlin.INDENT}.fillMaxSize()`
}
