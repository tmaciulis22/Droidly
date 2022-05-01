import Blockly from 'blockly';
import camelCase from '../../../util/camelCase';
import { modelMenuGenerator } from '../../../util/menuGenerators';

Blockly.Blocks['modelScreen'] = {
  init: function() {
    this.setColour(20)
    this.setTooltip('Defines app screen.')
    this.appendDummyInput()
      .appendField('Screen')
      .appendField(new Blockly.FieldTextInput('NameOfScreen'), 'SCREEN_NAME')
    this.appendDummyInput()
      .appendField('of model')
      .appendField(new Blockly.FieldDropdown(
          modelMenuGenerator(this)
        ), 'MODEL_NAME')
    this.appendStatementInput('SCREEN_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['modelScreen'] = (block) => {
  const screenName = block.getFieldValue('SCREEN_NAME')
  const modelName = block.getFieldValue('MODEL_NAME')
  const content = Blockly.Kotlin.statementToCode(block, 'SCREEN_CONTENT')

  const code = []
  code.push(
    '@Composable',
    `fun ${screenName}(`,
    `${Blockly.Kotlin.INDENT}navController: NavController,`,
    `${Blockly.Kotlin.INDENT}modelId: Long,`,
    `${Blockly.Kotlin.INDENT}mainViewModel: MainViewModel = hiltViewModel()`,
    `) {`,
    `${Blockly.Kotlin.INDENT}val item = mainViewModel.mainState.${camelCase(modelName)}s.firstOrNull { it.id == modelId } ?: ${modelName}()`,
    `${content}`,
    `}`
  )

  // Newline character added, so that file where screen Composable is located would have extra trailing line.
  // This avoids frequent GitHub end of file warnings
  const codeToReturn = `${code.join('\n')}\n`

  return codeToReturn
}
