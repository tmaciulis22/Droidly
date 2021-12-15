import Blockly from 'blockly'

Blockly.Blocks['paddingAll'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds padding on all sides of element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Padding')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_ALL')
  }
}

Blockly.Kotlin['paddingAll'] = (block) => {
  const padding = `${block.getFieldValue('PADDING_ALL')}.dp`

  return `${Blockly.Kotlin.INDENT}.padding(all = ${padding})`
}
