import Blockly from 'blockly'
import { navigateModelMenuGenerator, modelMenuGenerator } from '../../../util/menuGenerators'

Blockly.Blocks['navigateWithId'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Navigates to selected screen')
    this.appendDummyInput()
      .appendField('Navigate to')
      .appendField(new Blockly.FieldDropdown(
        navigateModelMenuGenerator(this)
        ), 'SCREEN_TO_NAVIGATE')
    this.appendDummyInput()
        .appendField('with')
        .appendField(new Blockly.FieldDropdown(
            modelMenuGenerator(this)
          ), 'MODEL_NAME')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['navigateWithId'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_TO_NAVIGATE')
  const modelName = block.getFieldValue('MODEL_NAME')
  const actionToReturn = screenName !== 'NOT_SELECTED' 
    ? `navController.navigate("${screenName}", (item as? ${modelName})?.id)`
    : '// navController.navigate("SCREEN_NAME")'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
