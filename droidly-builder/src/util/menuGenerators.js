import { screenTypes } from "../blockly/blocks/screens"

export const modelMenuGenerator = (block) => () => {
  const modelOptions = block.workspace.topBlocks_
    .filter(block => block.type === 'model')
    .map(block => {
      const modelName = block.getFieldValue('MODEL_NAME')
      return [modelName, modelName]
    })
  
  if (modelOptions.length !== 0 ) {
    return modelOptions
  } else {
    return [['ModelClass', 'NOT_SELECTED']]
  }
}

export const listMenuGenerator = (block) => () => {
  const modelOptions = block.workspace.topBlocks_
    .filter(block => block.type === 'model')
    .map(block => {
      const modelName = block.getFieldValue('MODEL_NAME')
      return [modelName, modelName]
    })

  return [
    ["Boolean", "Boolean"],
    ["Date", "Date"],
    ["Number", "Number"],
    ["String", "String"],
    ...modelOptions
  ]
}

export const modelPropertyMenuGenerator = (block) => () => {
  const modelName = block.getFieldValue('MODEL_OUTPUT_NAME')
  const modelBlock = block.workspace.topBlocks_.find(block => 
    block.getFieldValue('MODEL_NAME') === modelName
  )
  
  if (modelName === 'NameOfModel' || modelBlock === undefined) {
    return [['ModelClassProperty', 'NOT_SELECTED']]
  } else {
    const properties = modelBlock.getDescendants().slice(1).map(child => {
      const property = child.getFieldValue('PROPERTY_NAME')

      return [property, property]
    })

    return [...properties]
  }
}

export const navigateMenuGenerator = (block) => () => {
  const screenOptions = block.workspace.topBlocks_
    .filter(block => screenTypes.some(type => block.type === type))
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
