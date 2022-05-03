import Blockly from 'blockly';
import checkIfModelScreen from '../../../util/checkIfModelScreen';
import getModelNameFromScreenBlock from '../../../util/getModelNameFromScreenBlock';
import camelCase from '../../../util/camelCase';

Blockly.Blocks['screen'] = {
  init: function() {
    this.setColour(20)
    this.setTooltip('Defines app screen.')
    this.appendDummyInput()
      .appendField('Screen')
      .appendField(new Blockly.FieldTextInput('NameOfScreen'), 'SCREEN_NAME')
    this.appendStatementInput('SCREEN_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['screen'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_NAME')
  const content = Blockly.Kotlin.statementToCode(block, 'SCREEN_CONTENT')

  const modelListBlocks = block.getDescendants().slice(1).filter(child => 
    child.type === 'rowList' || child.type === 'columnList'
  )
  const isModelScreen = checkIfModelScreen(block)

  const code = []
  code.push(
    '@Composable',
    `fun ${screenName}(`,
    `${Blockly.Kotlin.INDENT}navController: NavController,`,
  )
  if (isModelScreen) {
    code.push(`${Blockly.Kotlin.INDENT}modelId: String,`)
  }
  code.push(
    `${Blockly.Kotlin.INDENT}mainViewModel: MainViewModel = hiltViewModel()`,
    `) {`
  )
  if (!isModelScreen && modelListBlocks.length > 0) {
    const usedModels = modelListBlocks.map(listBlock =>
      `${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}mainViewModel.readAll${listBlock.getFieldValue('MODEL_CLASS')}s()`
    ).join('\n')
    code.push(
      `${Blockly.Kotlin.INDENT}LaunchedEffect("${screenName}") {`,
      usedModels,
      `${Blockly.Kotlin.INDENT}}`
    )
  } else {
    const modelName = getModelNameFromScreenBlock(block)
    code.push(`${Blockly.Kotlin.INDENT}val item = mainViewModel.mainState.${camelCase(modelName)}s.firstOrNull { it.id == modelId } ?: ${modelName}()`)
  }
  code.push(
    `${content}`,
    `}`
  )

  // Newline character added, so that file where screen Composable is located would have extra trailing line.
  // This avoids frequent GitHub end of file warnings
  const codeToReturn = `${code.join('\n')}\n`

  return codeToReturn
}
