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
  const isDestinationModelScreen = checkIfModelScreen(screenBlock)
  const modelList = block.getRootBlock().getDescendants().slice(1).find(child => 
    child.type === 'rowList' || child.type === 'columnList'
  )
  const addItemId = modelList !== undefined ? modelList.getChildren()[0].toString().includes(screenName) : false

  let actionToReturn = '/* navController.navigate("SCREEN_NAME") */'
  if (screenName !== 'NOT_SELECTED') {
    if (isDestinationModelScreen) {
      actionToReturn = `navController.navigate("${screenName}", ${addItemId ? "item.id" : `"-1"`})`
    } else {
      actionToReturn = `navController.navigate("${screenName}")`
    }
  }

  return [actionToReturn, Blockly.Kotlin.ORDER_ATOMIC]
}
