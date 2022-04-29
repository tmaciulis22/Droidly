import Blockly from 'blockly'
import { navigateMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['navigate'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Navigates to selected screen')
    this.appendDummyInput()
      .appendField('Navigate to')
      .appendField(new Blockly.FieldDropdown(
        navigateMenuGenerator(this)
        ), 'SCREEN_TO_NAVIGATE')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['navigate'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_TO_NAVIGATE')
  const actionToReturn = screenName !== 'NOT_SELECTED' ? `navController.navigate("${screenName}")` : '// navController.navigate("SCREEN_NAME")'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
