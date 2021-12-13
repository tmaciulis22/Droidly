import Blockly from 'blockly';

Blockly.Blocks['box'] = {
  init: function() {
    this.setColour(250)
    this.setTooltip('Stacks children items on top of each other in a box with optional alignment')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Box')
    this.appendDummyInput()
      .appendField('content alignment (2D plane):')
      .appendField(new Blockly.FieldDropdown([
        ['top start', 'Alignment.TopStart'],
        ['top center', 'Alignment.TopCenter'],
        ['top end', 'Alignment.TopEnd'],
        ['center start', 'Alignment.CenterStart'],
        ['center', 'Alignment.Center'],
        ['center end', 'Alignment.CenterEnd'],
        ['bottom start', 'Alignment.BottomStart'],
        ['bottom center', 'Alignment.BottomCenter'],
        ['bottom end', 'Alignment.BottomEnd'],
      ]), 'BOX_ALIGNMENT')
    this.appendStatementInput('BOX_MODIFIER')
      .appendField('styling:')
    this.appendStatementInput('BOX_CONTENT')
      .appendField('content:')
      .setCheck(['']) // TODO add type checks
  }
}

Blockly.Kotlin['box'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'BOX_MODIFIER')
  const alignment = block.getFieldValue('BOX_ALIGNMENT')
  const content = Blockly.Kotlin.statementToCode(block, 'BOX_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Box(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}contentAlignment = ${alignment}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
