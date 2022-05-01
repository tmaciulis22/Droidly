import Blockly from 'blockly'
import { navigateModelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['navigateWithId'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Navigates to selected screen')
    this.appendDummyInput()
      .appendField('Navigate to')
      .appendField(new Blockly.FieldDropdown(
        navigateModelMenuGenerator(this)
        ), 'SCREEN_TO_NAVIGATE')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['navigateWithId'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_TO_NAVIGATE')
  const actionToReturn = screenName !== 'NOT_SELECTED' 
    ? `navController.navigate("${screenName}", item.id)` // TODO
    : '// navController.navigate("SCREEN_NAME")'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
