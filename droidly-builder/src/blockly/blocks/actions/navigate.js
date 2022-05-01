import Blockly from 'blockly'
import checkIfModelScreen from '../../../util/checkIfModelScreen'
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
  const screenBlock = block.workspace.topBlocks_.find(topBlock => 
    topBlock.getFieldValue('SCREEN_NAME') === screenName
  )
  const isModelScreen = checkIfModelScreen(screenBlock)

  let actionToReturn = '/* navController.navigate("SCREEN_NAME") */'
  if (screenName !== 'NOT_SELECTED') {
    if (isModelScreen) {
      actionToReturn = `navController.navigate("${screenName}", item.id)`
    } else {
      actionToReturn = `navController.navigate("${screenName}")`
    }
  }

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
