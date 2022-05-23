export default function hasTakePictureBlock(screenBlocks) {
  if (!screenBlocks) {
    return false
  }

  let hasTakePictureBlock = false
  screenBlocks.some(block => {
    const takePictureBlock = block.getDescendants().slice(1).some(descendant => 
      descendant.type === 'takePicture'
    )
    
    if (takePictureBlock) {
      hasTakePictureBlock = true
      return true
    }

    return false
  })

  return hasTakePictureBlock
}
