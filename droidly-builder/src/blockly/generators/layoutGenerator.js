import Blockly from "blockly"

Blockly.Kotlin['screen'] = function (block) {
  // TODO might need to conditionally add navigation controller
  const screenName = block.getFieldValue('SCREEN_NAME')
  const content = Blockly.Kotlin.statementToCode(block, 'SCREEN_CONTENT')

  return(
    `@Composable
    fun ${screenName}(navController: NavController) {
      ${content}
    }`
  )
}

Blockly.Kotlin['row'] = function (block) {
  const modifier = Blockly.Kotlin.statementToCode(block, 'ROW_MODIFIER') || ''
  const content = Blockly.Kotlin.statementToCode(block, 'ROW_CONTENT')

  return (
    `Row(modifier = ${modifier}) {
      ${content}
    }`
  )
}
