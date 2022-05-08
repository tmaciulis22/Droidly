import React from 'react';
import spinner from '../assets/spinner.svg';

const containerSyle = {
  position: 'fixed',
  top: '0',
  bottom: '0',
  left: '0',
  right: '0',
  backgroundColor: '#dff9fb',
  width: '100vw',
  height: '100vh',
  zIndex: '1000',
  visibility: 'visible',
  opacity: '0.75'
};

const containerStyleHidden = {
  visibility: 'hidden',
  opacity: '0'
}

const spinnerStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'
}

export default function LoadingSpinner({ isLoading }) {
  return (
    <div style={isLoading ? {...containerSyle} : {...containerStyleHidden}}>
      <div style={ {...spinnerStyle} }>
        <img src={spinner} alt="Loading spinner" />
      </div>
    </div>
  )
}
