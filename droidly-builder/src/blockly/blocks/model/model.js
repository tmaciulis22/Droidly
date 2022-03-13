import Blockly from 'blockly'

Blockly.Blocks['model'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Creates a database model with CRUD operations.')
    this.appendDummyInput()
      .appendField('Model')
      .appendField(new Blockly.FieldTextInput('MODEL_NAME'), 'MODEL_NAME')
    this.appendStatementInput('MODEL_PROPERTIES')
  }
}

Blockly.Kotlin['model'] = (block) => {
  const modelName = block.getFieldValue('MODEL_NAME')
  const modelProperties = Blockly.Kotlin.statementToCode(block, 'MODEL_PROPERTIES')

  const code = []
  code.push(
    `@Entity("tableName=${modelName}")`,
    `data class ${modelName}(`,
    `${Blockly.Kotlin.INDENT}@PrimaryKey(autoGenerate = true) val id: Long`,
    modelProperties,
    `)`
  )

  return code.join('\n')
}
