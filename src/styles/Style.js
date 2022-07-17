import { createTheme } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(65, 38, 171)',
      contrastText: '#fff',
    },
    secondary: {
      main: '#dd499d',
      contrastText: '#fff',
    },
    blur: {
      main: 'rgba(0, 0, 0, 0.25)',
      secondary: '#9696c81a',
      border: '#abc',
      contrastText: '#fff',
    },
    background: {
      main: '#ebecf0',
      dark: '#5e6c84',
      contrastText: '#355a99',
    },
    scrollbar: {
      thumb: '#ac82b9',
      track: 'rgb(0 0 0 / 15%)',
      lightTrack: 'rgb(0 0 0 / 5%)',
      lightThumb: 'rgb(0 0 0 / 10%)',
    },
  },
});

export default theme;
