import Blockly from 'blockly'

Blockly.Blocks['rotate'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Rotates the element. Positive value results in clockwise rotation, negative - counter clockwise')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Rotation (percentage)')
      .appendField(new Blockly.FieldNumber(0, -100, 100, 1), 'ROTATION')
  }
}

Blockly.Kotlin['rotate'] = (block) => {
  const zIndex = `${block.getFieldValue('ROTATION')/100}f` || '0f'

  return `${Blockly.Kotlin.INDENT}.rotate(${zIndex})`
}
