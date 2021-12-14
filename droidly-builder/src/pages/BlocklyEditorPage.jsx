import { Box } from '@mui/system';
import { useRef } from 'react';
import { useBlocklyWorkspace } from 'react-blockly';
import toolboxConfig from '../blockly/toolbox';

import Blockly from 'blockly' // TODO remove this later on

export default function BlocklyEditorPage() {

  const blocklyRef = useRef(null)

  // TODO delete this at the end of project
  const handleOnWorkspaceChanged = (workspace) => {
    const code = Blockly.Kotlin.workspaceToCode(workspace)
    console.log(code)
  }

  const { workspace } = useBlocklyWorkspace({
    ref: blocklyRef,
    toolboxConfiguration: toolboxConfig,
    workspaceConfiguration: {
      zoom: {
        controls: true,
        wheel: true,
        startScale: 1.0,
        maxScale: 2.0,
        minScale: 0.5,
      },
      trashcan: true
    },
    onWorkspaceChange: handleOnWorkspaceChanged
  })

  // Add button to generate code
  return (
    <Box>
      <div ref={blocklyRef} style={{ height: '100vh' }} />
    </Box>
  )
}
