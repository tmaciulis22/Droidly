import './colour'
import './colourRGB'
import './colourARGB'
import './border'
import './roundedCornerRectangle'

const stylingCategoryContent = {
  kind: 'category',
  name: 'Styling',
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
    {
      kind: 'block',
      type: 'border'
    },
    {
      kind: 'block',
      type: 'roundedCornerRectangle'
    },
  ]
}

export default stylingCategoryContent
