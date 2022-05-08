import { Grid } from '@mui/material';
import BlocklyEditorPage from './pages/BlocklyEditorPage';

function App() {
  return (
      <Grid container direction='column'>
        <Grid item>
          <BlocklyEditorPage />
        </Grid>
      </Grid>
  )
}

export default App;
