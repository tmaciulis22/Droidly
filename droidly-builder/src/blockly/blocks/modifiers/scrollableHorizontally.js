import Blockly from 'blockly'

Blockly.Blocks['scrollableHorizontally'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Enables horizontal scrolling for UI layouts and elements')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Enable horizontal scrolling')
  }
}

Blockly.Kotlin['scrollableHorizontally'] = (block) => {
  return `${Blockly.Kotlin.INDENT}.horizontalScroll(rememberScrollState())`
}
