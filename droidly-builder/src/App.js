import { Grid } from '@mui/material';
import BlocklyEditor from './Blockly/BlocklyEditor';

function App() {
  return (
      <Grid container direction='column'>
        <Grid item>
          <BlocklyEditor />
        </Grid>
      </Grid>
  )
}

export default App;
