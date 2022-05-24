import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'

Blockly.Blocks['model'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Creates a database model with CRUD operations.')
    this.appendDummyInput()
      .appendField('Model')
      .appendField(new Blockly.FieldTextInput('NameOfModel'), 'MODEL_NAME')
    this.appendDummyInput()
      .appendField('Source:')
      .appendField(new Blockly.FieldDropdown(
        [
          ['Local', 'LOCAL'],
          ['Firebase', 'FIREBASE']
        ]
      ), 'MODEL_SOURCE')
    this.appendStatementInput('MODEL_PROPERTIES')
  }
}

Blockly.Kotlin['model'] = (block) => {
  const indent = Blockly.Kotlin.INDENT
  const modelName = block.getFieldValue('MODEL_NAME')
  const modelSource = block.getFieldValue('MODEL_SOURCE')
  const modelProperties = Blockly.Kotlin.statementToCode(block, 'MODEL_PROPERTIES')
  const code = []

  if (modelSource === 'LOCAL') {
    const daoClassLines = []
    daoClassLines.push(
        `@Dao`,
        `interface ${modelName}Dao {`,
        ``,
        `${indent}@Query("SELECT * FROM ${camelCase(modelName)}")`,
        `${indent}suspend fun readAll(): List<${modelName}>`,
        ``,
        `${indent}@Insert(onConflict = OnConflictStrategy.REPLACE)`,
        `${indent}suspend fun save(entity: ${modelName}): Long`,
        '',
        `${indent}@Delete`,
        `${indent}suspend fun delete(entity: ${modelName})`,
        `}`,
        ''
    )
    code.push(daoClassLines.join('\n'))
    code.push(
      `@Entity(tableName = "${camelCase(modelName)}")`,
      `data class ${modelName}(`,
      `${indent}@PrimaryKey val id: String = "-1",`,
      modelProperties,
      `)`,
      ''
    )
  } else {
    code.push(
      `data class ${modelName}(`,
      `${indent}val id: String = "-1",`,
      modelProperties,
      `)`,
      ''
    )
  }

  return code.join('\n')
}
