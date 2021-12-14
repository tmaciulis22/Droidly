import Blockly from 'blockly';

Blockly.Blocks['text'] = {
  init: function() {
    this.setColour(175)
    this.setTooltip('Displays a text')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Text')
      .appendField(new Blockly.FieldMultilineInput('Lorem ipsum'), 'TEXT_STRING')
    this.appendDummyInput()
      .appendField('size:')
      .appendField(new Blockly.FieldNumber(16, 1, 164, 1), 'TEXT_SIZE')
      .appendField('weight:')
      .appendField(new Blockly.FieldNumber(400, 100, 900, 100), 'TEXT_WEIGHT')
      .appendField('max one line:')
      .appendField(new Blockly.FieldCheckbox(), 'IS_ONE_LINE')
    this.appendValueInput('TEXT_COLOR')
      .appendField('colour:')
    this.appendStatementInput('TEXT_MODIFIER')
      .appendField('modifier:')
  }
}

Blockly.Kotlin['text'] = (block) => {
  const addedModifiers = Blockly.Kotlin.statementToCode(block, 'TEXT_MODIFIER')
  const text = `"${block.getFieldValue('TEXT_STRING')}"` || '""'
  const color = Blockly.Kotlin.valueToCode(block, 'TEXT_COLOR', Blockly.Kotlin.ORDER_ATOMIC) || 'Color(0xff000000)'
  const size = `${block.getFieldValue('TEXT_SIZE')}.sp` || '16.sp'
  const weight = `FontWeight.W${block.getFieldValue('TEXT_WEIGHT')}` || 'FontWeight.W400'
  const maxOneLine = block.getFieldValue('IS_ONE_LINE') === 'TRUE'
  const numOfLines = maxOneLine ? 1 : 9999999

  const modifier = []
  modifier.push('Modifier')
  if (addedModifiers) {
    modifier.push(addedModifiers)
  }
  const modifierString = modifier.join('\n')

  const code = []
  code.push(
    'Text(',
    `${Blockly.Kotlin.INDENT}modifier = ${modifierString},`,
    `${Blockly.Kotlin.INDENT}color = ${color},`,
    `${Blockly.Kotlin.INDENT}text = ${text},`,
    `${Blockly.Kotlin.INDENT}fontSize = ${size},`,
    `${Blockly.Kotlin.INDENT}fontWeight = ${weight},`,
    `${Blockly.Kotlin.INDENT}overflow = TextOverflow.Ellipsis,`,
    `${Blockly.Kotlin.INDENT}maxLines = ${numOfLines},`,
    ')'
  )

  return code.join('\n')
}
