export default function getTakePictureBlock(screenBlocks) {
  if (!screenBlocks) {
    return undefined
  }

  screenBlocks.forEach(block => {
    const takePictureBlock = block.getDescendants().slice(1).find(descendant => 
      descendant.type === 'takePicture'
    )

    if (takePictureBlock) {
      return takePictureBlock
    }
  })

  return undefined
}
