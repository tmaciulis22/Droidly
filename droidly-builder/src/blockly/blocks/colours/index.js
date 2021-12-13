import './colour'
import './colourRGB'
import './colourARGB'

const coloursCategoryContent = {
  kind: 'category',
  name: 'Colours',
  colour: '60',
  contents: [
    {
      kind: 'block',
      type: 'colour'
    },
    {
      kind: 'block',
      type: 'colourRGB'
    },
    {
      kind: 'block',
      type: 'colourARGB'
    },
  ]
}

export default coloursCategoryContent
