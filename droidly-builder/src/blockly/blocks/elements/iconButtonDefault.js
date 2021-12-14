import Blockly from 'blockly';

Blockly.Blocks['iconButtonDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws an icon button with an icon from the list')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Icon Button')
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
      ]), 'ICON_BUTTON_ICON')
    this.appendValueInput('ICON_BUTTON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('ICON_BUTTON_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['iconButtonDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'ICON_BUTTON_MODIFIER')
  const imageVector = `Icons.Default.${block.getFieldValue('ICON_BUTTON_ICON')}`
  const onClick = Blockly.Kotlin.valueToCode(block, 'ICON_BUTTON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || '{}'

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'IconButton(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}onClick = ${onClick}`,
    ') {',
    `${Blockly.Kotlin.INDENT}Icon(`,
    `${Blockly.Kotlin.INDENT}${Blockly.Kotlin.INDENT}imageVector = ${imageVector}`,
    `${Blockly.Kotlin.INDENT})`,
    '}'
  )

  return code.join('\n')
}
