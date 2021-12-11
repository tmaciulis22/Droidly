import Blockly from 'blockly'

Blockly.Blocks['paddingStart'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds padding to the left side of the element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Padding left')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_START')
  }
}

Blockly.Kotlin['paddingStart'] = (block) => {
  const padding = `${block.getFieldValue('PADDING_START')}.dp`

  return `${Blockly.Kotlin.INDENT}.padding(start = ${padding})`
}
