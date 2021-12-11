import Blockly from 'blockly'

Blockly.Blocks['spacer'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Spacer element which fills layout with empty space, so for example two UI elements could be separated at the opposide sides of screen')
    this.appendDummyInput()
      .appendField('Spacer')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
  }
}

Blockly.Kotlin['spacer'] = () => {
  return 'Spacer(modifier = Modifier.weight(1.0f))'
}
