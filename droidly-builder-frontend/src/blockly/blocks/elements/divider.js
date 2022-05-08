import Blockly from 'blockly'

Blockly.Blocks['divider'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws a line divider, which could be used to divide elements/layouts')
    this.appendValueInput('DIVIDER_COLOR')
      .appendField('Divider')
      .appendField('colour:')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['divider'] = (block) => {
  const color = Blockly.Kotlin.valueToCode(block, 'DIVIDER_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0xcc000000)'

  return `Divider(color = ${color})`
}
