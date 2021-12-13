import Blockly from 'blockly'

Blockly.Blocks['background'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Changes elements background color and optionally its shape')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Background')
      this.appendValueInput('BACKGROUND_COLOR')
      .setCheck('Colour')
      .appendField('colour:')
    this.appendValueInput('BACKGROUND_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
  }
}

Blockly.Kotlin['background'] = (block) => {
  const color = Blockly.Kotlin.valueToCode(block, 'BACKGROUND_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0x0000ffff)'
  const shape = Blockly.Kotlin.valueToCode(block, 'BACKGROUND_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'RectangleShape'

  return `${Blockly.Kotlin.INDENT}.background(color = ${color}, shape = ${shape})`
}
