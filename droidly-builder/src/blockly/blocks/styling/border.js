import Blockly from 'blockly'

Blockly.Blocks['border'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds a border around the element. It is possible to use different shape than element\'s')
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
    this.appendValueInput('BORDER_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
  }
}

Blockly.Kotlin['border'] = (block) => {
  const width = `${block.getFieldValue('BORDER_WIDTH')}.dp` || '1.dp'
  const color = Blockly.Kotlin.valueToCode(block, 'BORDER_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0x000000ff)'
  const shape = Blockly.Kotlin.valueToCode(block, 'BORDER_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'RectangleShape'

  return `${Blockly.Kotlin.INDENT}.border(width = ${width},color = ${color}, shape = ${shape})`
}
