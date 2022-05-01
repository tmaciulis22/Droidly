export default function getModelNameFromScreenBlock(block) {
  return block.getDescendants().slice(1).find(descendant =>
    descendant.type === 'modelPropertyInput' || descendant.type === 'modelPropertyOutput'
  ).getFieldValue('MODEL_NAME')
}
