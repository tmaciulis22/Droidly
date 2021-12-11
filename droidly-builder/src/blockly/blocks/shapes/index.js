import './rectangle'
import './roundedRectangle'
import './circle'

const shapesCategoryContent = {
  kind: 'category',
  name: 'Shapes',
  colour: '10',
  contents: [
    {
      kind: 'block',
      type: 'rectangle'
    },
    {
      kind: 'block',
      type: 'roundedRectangle'
    },
    {
      kind: 'block',
      type: 'circle'
    },
  ]
}

export default shapesCategoryContent
