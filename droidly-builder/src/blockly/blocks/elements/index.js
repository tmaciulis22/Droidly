import './surface'
import './text'
import './spacer'
import './button'
import './defaultButton'
import './icon'
import './iconButton'
import './image'

const elementsCategoryContent = {
  kind: 'category',
  name: 'Elements',
  colour: '175',
  contents: [
    {
      kind: 'block',
      type: 'text'
    },
    {
      kind: 'block',
      type: 'spacer'
    },
    {
      kind: 'block',
      type: 'defaultButton'
    },
    {
      kind: 'block',
      type: 'button'
    },
    {
      kind: 'block',
      type: 'surface'
    },
    {
      kind: 'block',
      type: 'icon'
    },
    {
      kind: 'block',
      type: 'iconButton'
    },
    {
      kind: 'block',
      type: 'image'
    },
  ]
}

export default elementsCategoryContent
