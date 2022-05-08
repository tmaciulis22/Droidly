export default function checkIfModelScreen(block) {
  if (block === undefined) {
    return false
  }

  const hasModelActions = block.getDescendants().slice(1).some(descendant => 
    descendant.type === 'modelPropertyInput' 
    || descendant.type === 'modelPropertyOutput'
    || descendant.type === 'save'
    || descendant.type === 'delete'
  )
  const doesNotHaveModelList = !block.getDescendants().slice(1).some(descendant =>
    descendant.type === 'rowList' || descendant.type === 'columnList'
  )

  return hasModelActions && doesNotHaveModelList
}
