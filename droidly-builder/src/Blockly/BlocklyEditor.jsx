import { Box } from '@mui/system';
import { useRef } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import { toolboxConfig } from './Toolbox';

export default function BlocklyEditor() {

  const blocklyRef = useRef(null)

  const handleOnWorkspaceChange = (workspace) => {
    // TODO
  }

  const { workspace } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfig,
    onWorkspaceChange: handleOnWorkspaceChange
  })

  return (
    <Box>
      <div ref={blocklyRef} style={{ height: '100vh' }} />
    </Box>
  )
}
