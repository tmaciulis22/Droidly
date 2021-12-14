import Blockly from 'blockly';

Blockly.Blocks['row'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Layouts children items in a row horizontally with optional arrangement and alignment')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Row')
    this.appendDummyInput()
      .appendField('horizontal arrangement:')
      .appendField(new Blockly.FieldDropdown([
        ['start', 'Arrangement.Start'],
        ['end', 'Arrangement.End'],
        ['center', 'Arrangement.Center'],
        ['space evenly', 'Arrangement.SpaceEvenly'],
        ['space between', 'Arrangement.SpaceBetween'],
        ['space around', 'Arrangement.SpaceAround']
      ]), 'ROW_ARRANGEMENT')
    this.appendDummyInput()
      .appendField('vertical alignment:')
      .appendField(new Blockly.FieldDropdown([
        ['top', 'Alignment.Top'],
        ['center', 'Alignment.CenterVertically'],
        ['bottom', 'Alignment.Bottom']
      ]), 'ROW_ALIGNMENT')
    this.appendStatementInput('ROW_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('ROW_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['row'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ROW_MODIFIER')
  const arrangement  = block.getFieldValue('ROW_ARRANGEMENT')
  const alignment = block.getFieldValue('ROW_ALIGNMENT')
  const content = Blockly.Kotlin.statementToCode(block, 'ROW_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Row(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}horizontalArrangmenet = ${arrangement}`,
    `${Blockly.Kotlin.INDENT}verticalAlignment = ${alignment}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
