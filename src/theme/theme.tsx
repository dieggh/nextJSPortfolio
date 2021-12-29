import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  typography: {
    fontFamily: [
      'Source Sans Pro',
      'sans-serif',
    ].join(','),
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: "Source Sans Pro", sans-serif;
          font-style: Regular 400;
          font-display: swap;
          font-weight: 400;
        }
      `,
    },
  },
  palette: {
    primary: {
      main: '#22577E',
      dark: '',
      light: '#5584AC',
    },
    secondary: {
      main: '#95D1CC',
    },
    background: {
      paper: '#F6F2D4',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;
