import Blockly from 'blockly';

Blockly.Blocks['row'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Layouts children items in a row')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendDummyInput()
      .appendField('Row')
    this.appendStatementInput('ROW_MODIFIER')
      .appendField('styling:')
    this.appendStatementInput('ROW_CONTENT')
      .appendField('content:')
      .setCheck(['']) // TODO add type checks
  }
}
