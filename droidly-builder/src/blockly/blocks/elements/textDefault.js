import Blockly from 'blockly';

Blockly.Blocks['textDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Displays a text')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Text')
      .appendField(new Blockly.FieldTextInput('Lorem ipsum'), 'TEXT_STRING')
    this.appendStatementInput('TEXT_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['textDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'TEXT_MODIFIER')
  const text = `"${block.getFieldValue('TEXT_STRING')}"` || '""'

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Text(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}text = ${text},`,
    `${Blockly.Kotlin.INDENT}overflow = TextOverflow.Ellipsis,`,
    ')'
  )

  return code.join('\n')
}
