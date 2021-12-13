import Blockly from 'blockly'

Blockly.Blocks['colourARGB'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Create a colour from ARBG values in hex format (00 - FF). A - alpha(transparency), R - red, G - green, B - blue')
    this.appendDummyInput()
      .appendField('Colour')
    this.appendDummyInput()
      .appendField('alpha:')
      .appendField(new Blockly.FieldTextInput('FF'), 'ALPHA')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField('red:')
      .appendField(new Blockly.FieldTextInput('FF'), 'A_RED')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField('green:')
      .appendField(new Blockly.FieldTextInput('FF'), 'A_GREEN')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField('blue:')
      .appendField(new Blockly.FieldTextInput('FF'), 'A_BLUE')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.setOutput(true, 'Colour')
  }
}

Blockly.Kotlin['colourARGB'] = (block) => {
  const alpha = `0x${block.getFieldValue('ALPHA')}`
  const red = `0x${block.getFieldValue('A_RED')}`
  const green = `0x${block.getFieldValue('A_GREEN')}`
  const blue = `0x${block.getFieldValue('A_BLUE')}`

  return [`Color(red = ${red}, green = ${green}, blue = ${blue}, alpha = ${alpha})`, Blockly.Kotlin.ORDER_ATOMIC]
}
