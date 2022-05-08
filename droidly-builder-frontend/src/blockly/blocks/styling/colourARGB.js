import Blockly from 'blockly'

Blockly.Blocks['colourARGB'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Create a colour from ARBG value in hex format (00 - FF). A - alpha(transparency), R - red, G - green, B - blue')
    this.appendDummyInput()
      .appendField('Colour')
      .appendField(new Blockly.FieldTextInput('FFFFFF'), 'RGB')
    this.appendDummyInput()
      .appendField('alpha:')
      .appendField(new Blockly.FieldTextInput('FF'), 'ALPHA')
    this.setOutput(true, 'Colour')
  }
}

Blockly.Kotlin['colourARGB'] = (block) => {
  const argb = `0x${block.getFieldValue('ALPHA')}${block.getFieldValue('RGB')}`

  return [`Color(${argb})`, Blockly.Kotlin.ORDER_ATOMIC]
}
