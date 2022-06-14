import React from 'react';
import {CircularProgress} from '@mui/material'

const Loader = ({ height }) => (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:`${height}px`
  }}
  >
    <CircularProgress size={`${height/2}px`} color="inherit" />
  </div>
);

export default Loader;
