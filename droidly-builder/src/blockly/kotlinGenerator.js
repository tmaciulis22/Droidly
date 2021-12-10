import Blockly from 'blockly';

Blockly.Kotlin = new Blockly.Generator('Kotlin')

Blockly.Kotlin.scrub_ = function(block, code, opt_thisOnly) {
  const nextBlock =
      block.nextConnection && block.nextConnection.targetBlock()
  let nextCode = ''
  
  if (nextBlock) {
      nextCode =
          opt_thisOnly ? '' : '\n' + Blockly.Kotlin.blockToCode(nextBlock)
  }

  return code +  nextCode
}

// TODO
// Blockly.Kotlin.addReservedWords(
  
// )

// TODO order precedence?
