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
  const elevation = block.getFieldValue('SURFACE_ELEVATION') >= 0 ? `${block.getFieldValue('SURFACE_ELEVATION')}.dp` : null
  const onClick = Blockly.Kotlin.valueToCode(block, 'SURFACE_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || null
  const shape = Blockly.Kotlin.valueToCode(block, 'SURFACE_SHAPE', Blockly.Kotlin.ORDER_ATOMIC) || null
  const color = Blockly.Kotlin.valueToCode(block, 'SURFACE_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || null
  const border = Blockly.Kotlin.valueToCode(block, 'SURFACE_BORDER', Blockly.Kotlin.ORDER_ATOMIC) || null
  const content = Blockly.Kotlin.statementToCode(block, 'SURFACE_CONTENT')

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'DroidlySurface(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`
  )

  if (elevation) {
    code.push(`${Blockly.Kotlin.INDENT}elevation = ${elevation},`)
  }
  if (shape) {
    code.push(`${Blockly.Kotlin.INDENT}shape = ${shape},`)
  }
  if (color) {
    code.push(`${Blockly.Kotlin.INDENT}color = ${color},`)
  }
  if (border) {
    code.push(`${Blockly.Kotlin.INDENT}border = ${border},`)
  }
  if (onClick) {
    code.push(`${Blockly.Kotlin.INDENT}onClick = { ${onClick} }`)
  }

  code.push(
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
