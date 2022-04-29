import './navigate'
import './save'
import './delete'

const actionsCategoryContent = {
  kind: 'category',
  name: 'Actions',
  colour: '360',
  contents: [
    {
      kind: 'block',
      type: 'navigate'
    },
    {
      kind: 'block',
      type: 'save'
    },
    {
      kind: 'block',
      type: 'delete'
    }
  ]
}

export default actionsCategoryContent
