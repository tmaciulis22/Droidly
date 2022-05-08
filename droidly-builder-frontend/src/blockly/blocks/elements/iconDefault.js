import Blockly from 'blockly';

Blockly.Blocks['iconDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an icon from a list')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Icon')
      .appendField(new Blockly.FieldDropdown([
        ['arrow back', 'ArrowBack'],
        ['account', 'AccountCircle'],
        ['search', 'Search'],
        ['home', 'Home'],
        ['email', 'Email'],
        ['phone', 'Phone'],
        ['settings', 'Settings'],
        ['done', 'Done'],
        ['info', 'Info'],
        ['delete', 'Delete'],
        ['favorite', 'Favorite'],
        ['article', 'Article'],
        ['star', 'Star'],
        ['close', 'Close'],
        ['add', 'Add'],
        ['shopping cart', 'ShoppingCart']
      ]), 'ICON_ICON')
    this.appendStatementInput('ICON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['iconDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ICON_MODIFIER')
  const imageVector = `Icons.Default.${block.getFieldValue('ICON_ICON')}`

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlyIcon(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}imageVector = ${imageVector},`,
    ')'
  )

  return code.join('\n')
}
