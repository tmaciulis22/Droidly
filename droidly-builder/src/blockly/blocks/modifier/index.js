import './paddingAll'
import './paddingVerticalHorizontal'
import './paddingStart'
import './paddingTop'
import './paddingEnd'
import './paddingBottom'
import '../styling/border'
import './fillMaxWidth'
import './fillMaxHeight'
import './fillMaxSize'
import './height'
import './width'

const modifierCategoryContent = {
  kind: 'category',
  name: 'Modifier',
  colour: '200',
  contents: [
    {
      kind: 'block',
      type: 'paddingAll'
    },
    {
      kind: 'block',
      type: 'paddingVerticalHorizontal'
    },
    {
      kind: 'block',
      type: 'paddingStart'
    },
    {
      kind: 'block',
      type: 'paddingTop'
    },
    {
      kind: 'block',
      type: 'paddingEnd'
    },
    {
      kind: 'block',
      type: 'paddingBottom'
    },
    {
      kind: 'block',
      type: 'fillMaxWidth'
    },
    {
      kind: 'block',
      type: 'fillMaxHeight'
    },
    {
      kind: 'block',
      type: 'fillMaxSize'
    },
    {
      kind: 'block',
      type: 'height'
    },
    {
      kind: 'block',
      type: 'width'
    },
  ]
}

export default modifierCategoryContent
