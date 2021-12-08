import Blockly from 'blockly';

Blockly.Blocks['layout_row'] = {
  init: function() {
    this.setColour(10)
    this.setTooltip('Layouts children items in a row')
    this.setPreviousStatement(true)
    this.setNextStatement(true)
    this.appendStatementInput('MODIFIER')
      .appendField('styling') // TODO or modifier?
    this.appendStatementInput('CONTENT')
      .appendField('content')
  }
}
