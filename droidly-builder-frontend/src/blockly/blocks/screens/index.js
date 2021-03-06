import './screen'
import './screenWithBars'

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
    }
  ]
}

export const screenTypes = ['screen', 'screenWithBars']

export default screensCategoryContent
