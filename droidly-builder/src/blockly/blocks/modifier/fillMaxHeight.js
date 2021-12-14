import Blockly from 'blockly'

Blockly.Blocks['fillMaxHeight'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Forces element to fill all available height')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Fill height')
  }
}

Blockly.Kotlin['fillMaxHeight'] = () => {
  return `${Blockly.Kotlin.INDENT}.fillMaxHeight()`
}
