import './model'
import './stringProperty'
import './numberProperty'
// import './booleanProperty'
import './dateProperty'
// import './modelProperty'
// import './listProperty'
import './modelPropertyInput'
import './modelPropertyOutput'
import './textOutput'
import './takenPicture'
import './selectedPicture'

const modelCategoryContent = {
  kind: 'category',
  name: 'Data',
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
    // {
    //   kind: 'block',
    //   type: 'booleanProperty'
    // },
    {
      kind: 'block',
      type: 'dateProperty'
    },
    // {
    //   kind: 'block',
    //   type: 'modelProperty'
    // },
    // {
    //   kind: 'block',
    //   type: 'listProperty'
    // },
    {
      kind: 'block',
      type: 'modelPropertyInput'
    },
    {
      kind: 'block',
      type: 'modelPropertyOutput'
    },
    {
      kind: 'block',
      type: 'textOutput'
    },
    {
      kind: 'block',
      type: 'takenPicture'
    },
    {
      kind: 'block',
      type: 'selectedPicture'
    }
  ]
}

export default modelCategoryContent
