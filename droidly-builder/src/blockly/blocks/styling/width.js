import Blockly from 'blockly'

Blockly.Blocks['width'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Sets width of the element')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Width')
      .appendField(new Blockly.FieldNumber(100, 0, null, 1), 'WIDTH')
  }
}

Blockly.Kotlin['width'] = (block) => {
  const width = `${block.getFieldValue('WIDTH')}.dp` || '100.dp'

  return `${Blockly.Kotlin.INDENT}.width(${width})`
}
