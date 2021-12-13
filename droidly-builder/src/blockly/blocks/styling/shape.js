import Blockly from 'blockly'

Blockly.Blocks['shape'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Changes element or layout shape')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendValueInput('SHAPE')
      .setCheck('Shape')
      .appendField('Shape')
  }
}

Blockly.Kotlin['shape'] = (block) => {
  const shape = Blockly.Kotlin.valueToCode(block, 'SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'RoundedCornerShape(0)'

  return `${Blockly.Kotlin.INDENT}.clip(${shape})`
}
