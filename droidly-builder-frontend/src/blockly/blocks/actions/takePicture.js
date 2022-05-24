import Blockly from 'blockly'

Blockly.Blocks['takePicture'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Opens camera to take a picture.')
    this.appendDummyInput()
      .appendField('Take a picture')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['takePicture'] = () => {
  const action = 'navController.navigate("CameraScreen")'

  return [action, Blockly.Kotlin.ORDER_ATOMIC]
}
