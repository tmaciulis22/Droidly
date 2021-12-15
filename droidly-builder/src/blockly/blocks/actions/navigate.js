import Blockly from 'blockly'
import { screenTypes } from '../screens'

const menuGenerator = (block) => () => {
  const screenOptions = block.workspace.topBlocks_
    .filter(block => screenTypes.some(type => block.type === type))
    .map(block => {
      const screenName = block.getFieldValue('SCREEN_NAME')
      return [screenName, screenName]
    })
  
  if (screenOptions.length !== 0 ) {
    return screenOptions
  } else {
    return [['SCREEN_NAME', 'NOT_SELECTED']]
  }
}

Blockly.Blocks['navigate'] = {
  init: function() {
    this.setColour(360)
    this.setTooltip('Navigates to selected screen')
    this.appendDummyInput()
      .appendField('Navigate to')
      .appendField(new Blockly.FieldDropdown(
        menuGenerator(this)
        ), 'SCREEN_TO_NAVIGATE')
    this.setOutput(true, 'Action')
  }
}

Blockly.Kotlin['navigate'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_TO_NAVIGATE')
  const actionToReturn = screenName !== 'NOT_SELECTED' ? `navController.navigate("${screenName}")` : '// navController.navigate("SCREEN_NAME")'

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
