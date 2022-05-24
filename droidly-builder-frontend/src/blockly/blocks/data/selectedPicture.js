import Blockly from 'blockly'

Blockly.Blocks['selectedPicture'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Outputs a selected from gallery picture url.')
    this.appendDummyInput()
      .appendField('Selected form gallery picture')
    this.setOutput(true, 'url')
  }
}

Blockly.Kotlin['selectedPicture'] = () => {

  return ['mainViewModel.picUri', Blockly.Kotlin.ORDER_ATOMIC]
}
