import Blockly from 'blockly'

Blockly.Blocks['shadow'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Adds a shadow on the bottom of element. It is possible to use different shape than element\'s')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Shadow')
    this.appendDummyInput()
      .appendField('elevation:')
      .appendField(new Blockly.FieldNumber(1, 0, null, 1), 'SHADOW_ELEVATION')
    this.appendValueInput('SHADOW_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
  }
}

Blockly.Kotlin['shadow'] = (block) => {
  const elevation = `${block.getFieldValue('SHADOW_ELEVATION')}.dp` || '1.dp'
  const shape = Blockly.Kotlin.valueToCode(block, 'SHADOW_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'RectangleShape'

  return `${Blockly.Kotlin.INDENT}.shadow(elevation = ${elevation}, shape = ${shape})`
}
