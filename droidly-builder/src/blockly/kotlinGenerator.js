import Blockly from 'blockly';

Blockly.Kotlin = new Blockly.Generator('Kotlin')


// https://kotlinlang.org/docs/reference/grammar.html#expressions
Blockly.Kotlin.ORDER_ATOMIC = 0 // 0 "" ...
Blockly.Kotlin.ORDER_POSTFIX = 1 // ++, --, ., ?., ?
Blockly.Kotlin.ORDER_PREFIX = 2 // -, +, ++, --, !, label
Blockly.Kotlin.ORDER_TYPE_RHS = 3 // :, as, as?
Blockly.Kotlin.ORDER_MULTIPLICATIVE = 4 // *, /, %
Blockly.Kotlin.ORDER_ADDITIVE = 5 // +, -
Blockly.Kotlin.ORDER_RANGE = 6 // ..
Blockly.Kotlin.ORDER_INFIX_FUNCTION = 7 // simpleIdentifier
Blockly.Kotlin.ORDER_ELVIS = 8 // ?:
Blockly.Kotlin.ORDER_NAMED_CHECKS = 9 // in, !in, is, !is
Blockly.Kotlin.ORDER_COMPARISON = 10 // <, >, <=, >=
Blockly.Kotlin.ORDER_EQUALITY = 11 // ==, !=, ===, !==
Blockly.Kotlin.ORDER_CONJUNCTION = 12 // &&
Blockly.Kotlin.ORDER_DISJUNCTION = 13 // ||
Blockly.Kotlin.ORDER_SPREAD_OPERATOR = 14 // *
Blockly.Kotlin.ORDER_ASSIGNMENT = 15 // =, +=, -=, *=, /=, %=
Blockly.Kotlin.ORDER_NONE = 99 // (...)

// https://kotlinlang.org/docs/keyword-reference.html
Blockly.Kotlin.addReservedWords(
  'as,as?,break,class,continue,do,else,false,for,fun,if,in,!in,interface,is,!is,null,object,package,return,super,this,throw,true,try,typealias,typeof,val,var,when,while'
)

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
