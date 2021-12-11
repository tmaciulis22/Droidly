import './screen'
import './row'
import './column'
import './box'

// TODO Scaffold?
// TODO LazyColumn or LazyRow?

const layoutCategoryContent = {
  kind: 'category',
  name: 'Layout',
  colour: '250',
  contents: [
    {
      kind: 'block',
      type: 'screen'
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

export default layoutCategoryContent
