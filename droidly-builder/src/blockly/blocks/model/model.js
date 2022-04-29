import Blockly from 'blockly'
import camelCase from '../../../util/camelCase'

Blockly.Blocks['model'] = {
  init: function() {
    this.setColour(300)
    this.setTooltip('Creates a database model with CRUD operations.')
    this.appendDummyInput()
      .appendField('Model')
      .appendField(new Blockly.FieldTextInput('NameOfModel'), 'MODEL_NAME')
    this.appendStatementInput('MODEL_PROPERTIES')
  }
}

Blockly.Kotlin['model'] = (block) => {
  const indent = Blockly.Kotlin.INDENT
  const modelName = block.getFieldValue('MODEL_NAME')
  const modelProperties = Blockly.Kotlin.statementToCode(block, 'MODEL_PROPERTIES')
  const code = []

  const daoClassLines = []

  daoClassLines.push(
      `@Dao`,
      `interface ${modelName}Dao {`,
      ``,
      `${indent}@Query("SELECT * FROM ${camelCase(modelName)})`,
      `${indent}suspend fun readAll(): List<${modelName}>`,
      ``,
      `${indent}@Insert(onConflict = OnConflictStrategy.REPLACE)`,
      `${indent}suspend fun save(entity: ${modelName})`,
      '',
      `${indent}@Delete`,
      `${indent}suspend fun delete(entity: ${modelName})`,
      `}`,
      ''
  )

  code.push(
    daoClassLines.join('\n'),
    `@Entity(tableName = "${camelCase(modelName)}")`,
    `data class ${modelName}(`,
    `${indent}@PrimaryKey(autoGenerate = true) val id: Long? = null`,
    modelProperties,
    `)`,
    ''
  )

  return code.join('\n')
}
