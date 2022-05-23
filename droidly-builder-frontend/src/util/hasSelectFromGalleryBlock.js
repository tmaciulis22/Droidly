export default function hasSelectFromGalleryBlock(screenBlocks) {
  if (!screenBlocks) {
    return false
  }

  let hasSelectFromGalleryBlock = false
  screenBlocks.some(block => {
    const selectFromGalleryBlock = block.getDescendants().slice(1).find(descendant => 
      descendant.type === 'selectFromGallery'
    )

    if (selectFromGalleryBlock) {
      hasSelectFromGalleryBlock = true
      return true
    }

    return false
  })

  return hasSelectFromGalleryBlock
}
