import './rowDefault'
import './row'
import './columnDefault'
import './column'
import './boxDefault'
import './box'

const layoutsCategoryContent = {
  kind: 'category',
  name: 'Layouts',
  colour: '250',
  contents: [
    {
      kind: 'block',
      type: 'rowDefault'
    },
    {
      kind: 'block',
      type: 'columnDefault'
    },
    {
      kind: 'block',
      type: 'boxDefault'
    },
    {
      kind: 'block',
      type: 'row'
    },
    {
      kind: 'block',
      type: 'column'
    },
    {
      kind: 'block',
      type: 'box'
    },
  ]
}

export default layoutsCategoryContent
