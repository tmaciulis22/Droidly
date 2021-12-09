import Blockly from 'blockly';

Blockly.Blocks['screen'] = {
  init: function() {
    this.setColour(5)
    this.setTooltip('Defines app screen') // TODO might need to add checkbox for navigation controller
    this.appendDummyInput()
      .appendField('Screen')
    this.appendDummyInput()
      .appendField('name:')
      .appendField(new Blockly.FieldTextInput('NameOfScreen'), 'SCREEN_NAME')
    this.appendStatementInput('SCREEN_CONTENT')
      .appendField('content:')
      .setCheck([''])
  }
}
