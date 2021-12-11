import Blockly from 'blockly'

Blockly.Blocks['height'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Sets height of the element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Height')
      .appendField(new Blockly.FieldNumber(100, 0, null, 1), 'HEIGHT')
  }
}

Blockly.Kotlin['height'] = (block) => {
  const height = `${block.getFieldValue('HEIGHT')}.dp` || '100.dp'

  return `${Blockly.Kotlin.INDENT}.height(${height})`
}
