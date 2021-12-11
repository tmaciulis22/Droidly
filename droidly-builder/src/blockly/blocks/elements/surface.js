import Blockly from 'blockly';

Blockly.Blocks['surface'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws a material surface with optional shadow elevation, shape, color and border')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Surface')
    this.appendValueInput('SURFACE_ELEVATION')
      .setCheck('Number')
      .appendField('elevation:')
    this.appendValueInput('SURFACE_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
    this.appendValueInput('SURFACE_COLOR')
      .appendField('background color:')
    this.appendDummyInput()
      .appendField('border width:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'SURFACE_BORDER_WIDTH')
    this.appendValueInput('SURFACE_BORDER_COLOR')
      .setCheck('Colour')
      .appendField('border colour:')
    this.appendStatementInput('SURFACE_MODIFIER')
      .appendField('styling:')
    this.appendStatementInput('SURFACE_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['surface'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'SURFACE_MODIFIER')
  const elevation = Blockly.Kotlin.valueToCode(block, 'SURFACE_ELEVATION', Blockly.Kotlin.ORDER_ATOMIC) || '0'
  const elevationDp = `${elevation}.dp`
  const shape = Blockly.Kotlin.valueToCode(block, 'SURFACE_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'RectangleShape'
  const color = Blockly.Kotlin.valueToCode(block, 'SURFACE_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.colors.surface'
  const borderWidth = `${block.getFieldValue('SURFACE_BORDER_WIDTH')}.dp` || '0.dp'
  const borderColor = Blockly.Kotlin.valueToCode(block, 'SURFACE_BORDER_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0x0000ffff)'

  const content = Blockly.Kotlin.statementToCode(block, 'SURFACE_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Surface(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}shape = ${shape}`,
    `${Blockly.Kotlin.INDENT}color = ${color}`,
    `${Blockly.Kotlin.INDENT}border = BorderStroke(${borderWidth}, ${borderColor})`,
    `${Blockly.Kotlin.INDENT}elevation = ${elevationDp}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
