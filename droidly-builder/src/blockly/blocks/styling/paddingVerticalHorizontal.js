import Blockly from 'blockly'

Blockly.Blocks['paddingVerticalHorizontal'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds padding on element vertically and/or horizontally')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Padding')
    this.appendDummyInput()
      .appendField('horizontal:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_HORIZONTAL')
    this.appendDummyInput()
      .appendField('vertical:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'PADDING_VERTICAL')
  }
}

Blockly.Kotlin['paddingVerticalHorizontal'] = (block) => {
  const paddingHorizontal = `${block.getFieldValue('PADDING_HORIZONTAL')}.dp`
  const paddingVertical = `${block.getFieldValue('PADDING_VERTICAL')}.dp`


  return `${Blockly.Kotlin.INDENT}.padding(horizontal = ${paddingHorizontal}, vertical = ${paddingVertical})`
}
