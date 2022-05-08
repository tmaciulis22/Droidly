import Blockly from 'blockly'

Blockly.Blocks['list'] = {
  init: function() {
    this.setColour(240)
    this.setTooltip('Creates a data list')
    this.appendDummyInput()
      .appendField('Data list')
    this.appendValueInput('LIST_ITEM_1')
    this.appendValueInput('LIST_ITEM_2')
    this.appendValueInput('LIST_ITEM_3')
    this.setOutput(true)
  }
}

Blockly.Kotlin['list'] = (block) => {
  return ""
}
