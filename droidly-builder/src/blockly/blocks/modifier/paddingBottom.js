import Blockly from 'blockly'

Blockly.Blocks['paddingBottom'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds padding to the bottom of the element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Padding bottom')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_BOTTOM')
  }
}

Blockly.Kotlin['paddingBottom'] = (block) => {
  const padding = `${block.getFieldValue('PADDING_BOTTOM')}.dp`

  return `${Blockly.Kotlin.INDENT}.padding(bottom = ${padding})`
}
