import Blockly from 'blockly'

Blockly.Blocks['border'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds a border around the element.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Border')
    this.appendDummyInput()
      .appendField('width:')
      .appendField(new Blockly.FieldNumber(1, 0, null, 1), 'BORDER_WIDTH')
    this.appendValueInput('BORDER_COLOR')
      .setCheck('Colour')
      .appendField('colour:')
  }
}

Blockly.Kotlin['border'] = (block) => {
  const width = `${block.getFieldValue('BORDER_WIDTH')}.dp` || '1.dp'
  const color = Blockly.Kotlin.valueToCode(block, 'BORDER_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0x000000ff)'

  return `${Blockly.Kotlin.INDENT}.border(width = ${width}, color = ${color})`
}
