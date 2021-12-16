import Blockly from 'blockly'

Blockly.Blocks['spacer'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Spacer element which makes two UI elements be separated at the opposide sides of screen by filling up empty space')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Spacer')
  }
}

Blockly.Kotlin['spacer'] = () => {
  return 'Spacer(modifier = Modifier.weight(1.0f))'
}
