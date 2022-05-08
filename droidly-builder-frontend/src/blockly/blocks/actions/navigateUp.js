import Blockly from 'blockly'

Blockly.Blocks['navigateUp'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Navigates back to previous screen')
    this.appendDummyInput()
      .appendField('Navigate back')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['navigateUp'] = (block) => {
  const actionToReturn = 'navController.navigateUp()'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
