import './screen'
import './screenWithBars'
import './modelScreen'

const screensCategoryContent = {
  kind: 'category',
  name: 'Screens',
  colour: '0',
  contents: [
    {
      kind: 'block',
      type: 'screen'
    },
    {
      kind: 'block',
      type: 'screenWithBars'
    },
    {
      kind: 'block',
      type: 'modelScreen'
    }
  ]
}

export const screenTypes = ['screen', 'screenWithBars']

export default screensCategoryContent
