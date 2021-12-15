import Blockly from 'blockly';

Blockly.Blocks['surfaceDefault'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Draws a material surface or aka card.')
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
  const onClick = Blockly.Kotlin.valueToCode(block, 'SURFACE_ON_CLICK', Blockly.Kotlin.ORDER_ATOMIC) || ''
  const elevation = `${block.getFieldValue('SURFACE_ELEVATION')}.dp` || '1.dp'
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
    `${Blockly.Kotlin.INDENT}elevation = ${elevation},`,
    `${Blockly.Kotlin.INDENT}shape = 'MaterialTheme.shapes.medium',`,
    ') {',
    `${content}`,
    '}'
  )

  return code.join('\n')
}
