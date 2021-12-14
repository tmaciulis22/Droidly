import Blockly from 'blockly';

Blockly.Blocks['column'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Layouts children items in a column vertically with optional arrangement and alignment')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Column')
    this.appendDummyInput()
      .appendField('vertical arrangement:')
      .appendField(new Blockly.FieldDropdown([
        ['top', 'Arrangement.Top'],
        ['bottom', 'Arrangement.Bottom'],
        ['center', 'Arrangement.Center'],
        ['space evenly', 'Arrangement.SpaceEvenly'],
        ['space between', 'Arrangement.SpaceBetween'],
        ['space around', 'Arrangement.SpaceAround']
      ]), 'COLUMN_ARRANGEMENT')
    this.appendDummyInput()
      .appendField('horizontal alignment:')
      .appendField(new Blockly.FieldDropdown([
        ['start', 'Alignment.Start'],
        ['center', 'Alignment.CenterHorizontally'],
        ['end', 'Alignment.End']
      ]), 'COLUMN_ALIGNMENT')
    this.appendStatementInput('COLUMN_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('COLUMN_CONTENT')
      .appendField('content:')
      .setCheck(['']) // TODO add type checks
  }
}

Blockly.Kotlin['column'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'COLUMN_MODIFIER')
  const arrangement  = block.getFieldValue('COLUMN_ARRANGEMENT')
  const alignment = block.getFieldValue('COLUMN_ALIGNMENT')
  const content = Blockly.Kotlin.statementToCode(block, 'COLUMN_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Column(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}verticalArrangement = ${arrangement}`,
    `${Blockly.Kotlin.INDENT}horizontalAlignment = ${alignment}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
