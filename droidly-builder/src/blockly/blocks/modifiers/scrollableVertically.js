import Blockly from 'blockly'

Blockly.Blocks['scrollableVertically'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Enables vertical scrolling for UI layouts and elements')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Enable vertical scrolling')
  }
}

Blockly.Kotlin['scrollableVertically'] = (block) => {
  return `${Blockly.Kotlin.INDENT}.verticalScroll(rememberScrollState())`
}
