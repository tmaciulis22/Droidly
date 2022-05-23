import Blockly from 'blockly'

Blockly.Blocks['selectedPicture'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Outputs a selected or taken by camera picture url.')
    this.appendDummyInput()
      .appendField('Selected/Taken picture')
  }
}

Blockly.Kotlin['selectedPicture'] = () => {

  return ['mainViewModel.picUri', Blockly.Kotlin.ORDER_ATOMIC]
}
