import React from 'react';
import AppBarMui from '@mui/material/AppBar';
import Toolbar from './Toolbar';

const AppBar = () => (
  <AppBarMui position="static" color="primary">
    <Toolbar />
  </AppBarMui>
);

export default AppBar;
