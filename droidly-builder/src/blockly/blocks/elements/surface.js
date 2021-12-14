import Blockly from 'blockly';

Blockly.Blocks['surface'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws a material surface(card) with optional shadow elevation, shape, color and border.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.setInputsInline(false)
    this.appendDummyInput()
      .appendField('Surface')
      .appendField('shadow:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'SURFACE_ELEVATION')
    this.appendValueInput('SURFACE_SHAPE')
      .setCheck('Shape')
      .appendField('shape:')
    this.appendValueInput('SURFACE_COLOR')
      .setCheck('Colour')
      .appendField('colour:')
    this.appendValueInput('SURFACE_BORDER')
      .setCheck('Border')
      .appendField('border:')
    this.appendValueInput('SURFACE_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('SURFACE_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('SURFACE_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['surface'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'SURFACE_MODIFIER')
  const onClick = Blockly.Kotlin.valueToCode(block, 'SURFACE_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || ''
  const elevation = `${block.getFieldValue('SURFACE_ELEVATION')}.dp` || '1.dp'
  const shape = Blockly.Kotlin.valueToCode(block, 'SURFACE_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.shapes.medium'
  const color = Blockly.Kotlin.valueToCode(block, 'SURFACE_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'MaterialTheme.colors.surface'
  const border = Blockly.Kotlin.valueToCode(block, 'SURFACE_BORDER', Blockly.Kotlin.ORDER_ATOMIC) || 'null'
  const content = Blockly.Kotlin.statementToCode(block, 'SURFACE_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  if (onClick){
    modifier.push(`.clickable { ${onClick} }`)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Surface(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}shape = ${shape},`,
    `${Blockly.Kotlin.INDENT}color = ${color},`,
    `${Blockly.Kotlin.INDENT}border = ${border},`,
    `${Blockly.Kotlin.INDENT}elevation = ${elevation},`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
