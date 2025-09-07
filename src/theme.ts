// src/theme.ts
'use client';

import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    mode: 'dark', // Black background
    primary: {
      main: red[500], // Red as the primary color
    },
    secondary: {
      main: red[300], // A lighter red for secondary elements
    },
    background: {
      default: '#000000', // Black background
      paper: '#121212', // Dark gray for paper elements
    },
    text: {
      primary: '#ffffff',
      secondary: '#bbbbbb',
    },
  },
});

export default theme;
