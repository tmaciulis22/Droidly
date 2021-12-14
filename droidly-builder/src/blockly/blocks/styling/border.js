import Blockly from 'blockly'

Blockly.Blocks['border'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Creates a border around element')
    this.appendDummyInput()
      .appendField('Border')
    this.appendDummyInput()
      .appendField('width:')
      .appendField(new Blockly.FieldNumber(1, 0, null, 1), 'BORDER_WIDTH')
    this.appendValueInput('BORDER_COLOR')
      .setCheck('Colour')
      .appendField('colour:')
    this.setOutput(true, 'Border')
  }
}

Blockly.Kotlin['border'] = (block) => {
  const borderWidth = `${block.getFieldValue('BORDER_WIDTH')}.dp` || '1.dp'
  const borderColor = `${block.getFieldValue('BORDER_COLOR') || 'Color(0xff000000)'}`

  return [`BorderStroke(${borderWidth}, ${borderColor})`, Blockly.Kotlin.ORDER_ATOMIC]
}
