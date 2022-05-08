import Blockly from 'blockly';

Blockly.Blocks['surfaceDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws a material surface(card) with elevation.')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Surface')
      .appendField('shadow:')
      .appendField(new Blockly.FieldNumber(0, 0, null, 1), 'SURFACE_ELEVATION')
    this.appendValueInput('SURFACE_ON_CLICK')
      .setCheck('Action')
      .appendField('on click:')
    this.appendStatementInput('SURFACE_MODIFIER')
      .appendField('modifier:')
    this.appendStatementInput('SURFACE_CONTENT')
      .appendField('content:')
  }
}

Blockly.Kotlin['surfaceDefault'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'SURFACE_MODIFIER')
  const elevation = block.getFieldValue('SURFACE_ELEVATION') >= 0 ? `${block.getFieldValue('SURFACE_ELEVATION')}.dp` : null
  const onClick = Blockly.Kotlin.valueToCode(block, 'SURFACE_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || null
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
