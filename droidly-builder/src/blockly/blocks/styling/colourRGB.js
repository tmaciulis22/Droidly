import Blockly from 'blockly'

Blockly.Blocks['colourRGB'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Create a colour from RBG value in hex format (000000 - FFFFFF). R - red, G - green, B - blue')
    this.appendDummyInput()
      .appendField('Colour')
      .appendField(new Blockly.FieldTextInput('FFFFFF'), 'RGB')
      .setAlign(Blockly.ALIGN_RIGHT)
    this.setOutput(true, 'Colour')
  }
}

Blockly.Kotlin['colourRGB'] = (block) => {
  const argb = `0xFF${block.getFieldValue('RGB')}`

  return [`Color(${argb})`, Blockly.Kotlin.ORDER_ATOMIC]
}
