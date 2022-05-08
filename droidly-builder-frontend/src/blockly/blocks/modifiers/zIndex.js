import Blockly from 'blockly'

Blockly.Blocks['zIndex'] = {
  init: function() {
    this.setColour(200)
    this.setTooltip('Sets the z-index of the element. Higher index means element will be shown in front of those elements who have lower index.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Z-index')
      .appendField(new Blockly.FieldNumber(0, 0, 100, 1), 'Z_INDEX')
  }
}

Blockly.Kotlin['zIndex'] = (block) => {
  const zIndex = `${block.getFieldValue('Z_INDEX')/100}f` || '0f'

  return `${Blockly.Kotlin.INDENT}.zIndex(${zIndex})`
}
