import Blockly from 'blockly'

const menuGenerator = (block) => () => {
  const screenOptions = block.workspace.topBlocks_
    .filter(block => block.type === 'screen')
    .map(block => {
      const screenName = block.getFieldValue('SCREEN_NAME')
      return [screenName, screenName]
    })
  
  if (screenOptions.length !== 0 ) {
    return screenOptions
  } else {
    return [['SCREEN_NAME', 'NOT_SELECTED']]
  }
}

Blockly.Blocks['app'] = {
  init: function() {
    this.setColour(0)
    this.setTooltip('Initializes application. WARNING: Only one App block should be in the workspace!!!')
    this.appendDummyInput()
      .appendField('App')
    this.appendDummyInput()
      .appendField('starting screen:')
      .appendField(new Blockly.FieldDropdown(
        menuGenerator(this)
        ), 'START_SCREEN')
  }
}

Blockly.Kotlin['app'] = (block) => {
  // const selectedScreen = block.getFieldValue('START_SCREEN')
  // const startingScreen = selectedScreen !== 'NOT_SELECTED' ? selectedScreen : '// navController.navigate("SCREEN_NAME")'

  // const screens = {}
  // block.workspace.topBlocks_
  //   .filter(block => block.type === 'screen')
  //   .map(block => {
  //     const screenName = block.getFieldValue('SCREEN_NAME')

  //   })
  

  // const code = []
  // const formattedScreenNames = [] // Used later on when generating code for all screens list
  // const indent = Blockly.Kotlin.INDENT

  // screenNames.forEach(name => {
  //   code.push(`object ${name} : Screen(${name}, { ${name}(it) })`)
  //   formattedScreenNames.push(`${indent}${indent}${name},`)
  // })
  // code.push(
  //   '',
  //   'object Screens {',
  //   `${indent}val startingScreenName: String = ${startingScreen}.route`,
  //   `${indent}val allScreens = listOf(`,
  //   ...formattedScreenNames,
  //   `${indent})`,
  //   `${indent}val bottomNavScreens = listOf()`,
  //   '}'
  // )

  // // Newline character added, so that activity would be separated from composables with an empty line
  // const codeToReturn = `${code.join('\n')}\n`

  // return codeToReturn
  return ''
}
