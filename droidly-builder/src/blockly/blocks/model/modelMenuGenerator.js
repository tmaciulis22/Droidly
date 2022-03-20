const modelMenuGenerator = (block) => () => {
  const screenOptions = block.workspace.topBlocks_
    .filter(block => block.type === 'model')
    .map(block => {
      const modelName = block.getFieldValue('MODEL_NAME')
      return [modelName, modelName]
    })
  
  if (screenOptions.length !== 0 ) {
    return screenOptions
  } else {
    return [['ModelClass', 'NOT_SELECTED']]
  }
}

export default modelMenuGenerator
