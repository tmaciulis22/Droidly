import Blockly from 'blockly'

Blockly.Blocks['colourRGB'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Create a colour from RBG values in hex format (00 - FF). R - red, G - green, B - blue')
    this.appendDummyInput()
      .appendField('Colour')
    this.appendDummyInput()
      .appendField('red:')
      .appendField(new Blockly.FieldTextInput('FF'), 'RED')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField('green:')
      .appendField(new Blockly.FieldTextInput('FF'), 'GREEN')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.appendDummyInput()
      .appendField('blue:')
      .appendField(new Blockly.FieldTextInput('FF'), 'BLUE')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.setOutput(true, 'Colour')
  }
}

Blockly.Kotlin['colourRGB'] = (block) => {
  const red = `0x${block.getFieldValue('RED')}`
  const green = `0x${block.getFieldValue('GREEN')}`
  const blue = `0x${block.getFieldValue('BLUE')}`

  return [`Color(red = ${red}, green = ${green}, blue = ${blue}, alpha = 0xFF)`, Blockly.Kotlin.ORDER_ATOMIC]
}
