import './model'
import './stringProperty'
import './numberProperty'
import './booleanProperty'

const modelCategoryContent = {
  kind: 'category',
  name: 'Model',
  colour: '300',
  contents: [
    {
      kind: 'block',
      type: 'model'
    },
    {
      kind: 'block',
      type: 'stringProperty'
    },
    {
      kind: 'block',
      type: 'numberProperty'
    },
    {
      kind: 'block',
      type: 'booleanProperty'
    }
  ]
}

export default modelCategoryContent
