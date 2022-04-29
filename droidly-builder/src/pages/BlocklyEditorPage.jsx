import React, { useRef, useState } from 'react';
import { Box } from '@mui/system';
import { useBlocklyWorkspace } from 'react-blockly';
import Blockly from 'blockly'
import toolboxConfig from '../blockly/toolbox';
import { Button } from '@mui/material';
import BuildModal from '../components/BuildModal';
import { screenTypes } from '../blockly/blocks/screens';
import generateViewLayerCode from '../util/generateViewLayerCode';
import generateViewLayerImports from '../util/generateImports';

export default function BlocklyEditorPage() {

  const [showModal, setShowModal] = useState(false)
  const [modalScreenOptions, setModalScreenOptions] = useState([])

  const [screenBlocks, setScreenBlocks] = useState([])

  const blocklyRef = useRef(null)

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

  const handleBuildButtonClick = () => {
    const screenBlocks = workspace.topBlocks_
      .filter(block => [screenTypes, 'modelScreen'].some(type => block.type === type))
    setScreenBlocks(screenBlocks)

    const screenOptions = screenBlocks
      .map(block => block.getFieldValue('SCREEN_NAME'))
    setModalScreenOptions(screenOptions)

    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleBuild = (startScreen) => {
    const imports = generateViewLayerImports()
    const screenObjects = generateViewLayerCode(screenBlocks, startScreen)
    const workspaceCode = Blockly.Kotlin.workspaceToCode(workspace)

    const sourceCodeBlob = new Blob([imports, screenObjects, workspaceCode], { type: 'text/plain'})
    const url = window.URL.createObjectURL(
      sourceCodeBlob,
    )

    const link = document.createElement('a')
    link.setAttribute(
      'download',
      `DroidlyGeneratedApp.kt`,
    )
    link.href = url;
    document.body.appendChild(link)

    window.requestAnimationFrame(function () {
      var event = new MouseEvent('click')
      link.dispatchEvent(event)
      link.parentNode.removeChild(link)
		});
  }

  return (
    <Box>
      <div ref={blocklyRef} style={{ height: '100vh' }} />
      <Button 
        style={{ position: 'fixed', top: '1rem', right: '1rem'}}
        variant='contained'
        color='success'
        onClick={handleBuildButtonClick}
      >
        Build app
      </Button>
      <BuildModal
        screenOptions={modalScreenOptions}
        show={showModal}
        onClose={handleModalClose}
        onBuild={handleBuild}
      />
    </Box>
  )
}
