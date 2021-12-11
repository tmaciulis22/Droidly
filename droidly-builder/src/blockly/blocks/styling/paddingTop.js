import Blockly from 'blockly'

Blockly.Blocks['paddingTop'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds padding to the top of the element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Padding top')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_TOP')
  }
}

Blockly.Kotlin['paddingTop'] = (block) => {
  const padding = `${block.getFieldValue('PADDING_TOP')}.dp`

  return `${Blockly.Kotlin.INDENT}.padding(top = ${padding})`
}
