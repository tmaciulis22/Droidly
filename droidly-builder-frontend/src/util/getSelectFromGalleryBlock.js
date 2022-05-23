export default function getSelectFromGalleryBlock(screenBlocks) {
  if (!screenBlocks) {
    return undefined
  }

  screenBlocks.forEach(block => {
    const selectFromGalleryBlock = block.getDescendants().slice(1).find(descendant => 
      descendant.type === 'selectFromGallery'
    )

    if (selectFromGalleryBlock) {
      return selectFromGalleryBlock
    }
  })

  return undefined
}
