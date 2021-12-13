import Blockly from 'blockly';

Blockly.Blocks['surface'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws a material surface(card) with optional shadow elevation, shape, color and border.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Surface')
    this.appendDummyInput()
      .appendField('shadow:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'SURFACE_ELEVATION')
    this.appendValueInput('SURFACE_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
    this.appendValueInput('SURFACE_COLOR')
      .setCheck('Colour')
      .appendField('background colour:')
    this.appendDummyInput()
      .appendField('border width:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'SURFACE_BORDER_WIDTH')
    this.appendValueInput('SURFACE_BORDER_COLOR')
      .setCheck('Colour')
      .appendField('border colour:')
    this.appendValueInput('SURFACE_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('SURFACE_MODIFIER')
      .appendField('styling:')
    this.appendStatementInput('SURFACE_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['surface'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'SURFACE_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'SURFACE_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || null
  const elevation = `${block.getFieldValue('SURFACE_ELEVATION')}.dp` || '1.dp'
  const shape = Blockly.Kotlin.valueToCode(block, 'SURFACE_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.shapes.medium'
  const color = Blockly.Kotlin.valueToCode(block, 'SURFACE_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.colors.surface'
  const borderWidth = `${block.getFieldValue('SURFACE_BORDER_WIDTH')}.dp` || '0.dp'
  const borderColor = Blockly.Kotlin.valueToCode(block, 'SURFACE_BORDER_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0x0000ffff)'
  const content = Blockly.Kotlin.statementToCode(block, 'SURFACE_CONTENT')

  let border = 'null'
  if (borderWidth && borderColor) {
    border = `BorderStroke(${borderWidth}, ${borderColor})`
  }

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  if (onClick){
    modifier.push(`.clickable{ ${onClick} }`)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Surface(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString}`,
    `${Blockly.Kotlin.INDENT}shape = ${shape}`,
    `${Blockly.Kotlin.INDENT}color = ${color}`,
    `${Blockly.Kotlin.INDENT}contentColor = contentColorFor(backgroundColor)`,
    `${Blockly.Kotlin.INDENT}border = ${border}`,
    `${Blockly.Kotlin.INDENT}elevation = ${elevation}`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
