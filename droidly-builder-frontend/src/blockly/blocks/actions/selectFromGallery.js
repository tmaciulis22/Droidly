import Blockly from 'blockly'

Blockly.Blocks['selectFromGallery'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Opens gallery to pick a picture.')
    this.appendDummyInput()
      .appendField('Select from gallery')
    this.appendValueInput('NAVIGATION_ACTION')
      .appendField('Next action')
      .setCheck('Action')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['selectFromGallery'] = () => {
  const action = 'navController.navigate("GalleryScreen")'

  return [action, Blockly.Kotlin.ORDER_ATOMIC]
}
