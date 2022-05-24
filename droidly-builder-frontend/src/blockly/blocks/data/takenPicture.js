import Blockly from 'blockly'

Blockly.Blocks['takenPicture'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Outputs a taken by camera picture url.')
    this.appendDummyInput()
      .appendField('Taken by camera picture')
    this.setOutput(true, 'url')
  }
}

Blockly.Kotlin['takenPicture'] = () => {

  return ['mainViewModel.picUri', Blockly.Kotlin.ORDER_ATOMIC]
}
