export default function getModelNameFromScreenBlock(block) {
  const screenBlock = block.getDescendants().slice(1).find(descendant =>
    descendant.type === 'modelPropertyInput' || descendant.type === 'modelPropertyOutput'
  )
  if (screenBlock === undefined) 
    return '' 
  else 
    return screenBlock.getFieldValue('MODEL_NAME')
}
