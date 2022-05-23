import './navigate'
import './navigateUp'
import './save'
import './delete'
import './takePicture'
import './selectFromGallery'

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
      type: 'navigateUp'
    },
    {
      kind: 'block',
      type: 'save'
    },
    {
      kind: 'block',
      type: 'delete'
    },
    {
      kind: 'block',
      type: 'takePicture'
    },
    {
      kind: 'block',
      type: 'selectFromGallery'
    }
  ]
}

export default actionsCategoryContent
