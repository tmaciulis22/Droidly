import Blockly from 'blockly'

Blockly.Blocks['colour'] = {
  init: function() {
    this.setColour(60)
    this.setTooltip('Choose a colour from a palette')
    this.appendDummyInput()
      .appendField('Colour')
      .appendField(new Blockly.FieldColour('#f1c40f', null,
      {
        'colourOptions':
        ['#2ecc71', '#f1c40f', '#c0392b',
        '#000000', '#FFFFFF', '#2e86de',
        '#576574', '#5f27cd', '#8B4513'],
        'colourTitles':
        ['Green', 'Yellow', 'Red',
        'Black', 'White', 'Blue',
        'Gray', 'Purple', 'Brown'],
        'columns': 3
      }), 'COLOUR')
    this.setOutput(true, 'Colour')
  }
}

Blockly.Kotlin['colour'] = (block) => {
  const colourCode = `0xFF${block.getFieldValue('COLOUR').substring(1)}`

  return [`Color(${colourCode})`, Blockly.Kotlin.ORDER_ATOMIC]
}
