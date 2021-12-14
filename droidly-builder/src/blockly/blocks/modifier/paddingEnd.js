import Blockly from 'blockly'

Blockly.Blocks['paddingEnd'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds padding to the right side of the element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Padding right')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_END')
  }
}

Blockly.Kotlin['paddingEnd'] = (block) => {
  const padding = `${block.getFieldValue('PADDING_END')}.dp`

  return `${Blockly.Kotlin.INDENT}.padding(end = ${padding})`
}
