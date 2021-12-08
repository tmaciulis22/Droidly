import { Box } from '@mui/system';
import { useRef } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import toolboxConfig from '../blockly/toolbox';

export default function BlocklyEditorPage() {

  const blocklyRef = useRef(null)

  const { workspace } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfig,
  })

  // Add button to generate code
  return (
    <Box>
      <div ref={blocklyRef} style={{ height: '100vh' }} />
    </Box>
  )
}
