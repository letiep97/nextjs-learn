import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    color?: {
      [key: string]: string | number;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    color?: { [key: string]: string | number };
  }
}

// Create a theme instance.
export const theme = createTheme({
  color: {
    bgColor: '#fcfcfc',
  },
  //
  palette: {
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  //
  typography: {
    fontSize: 14.4,
  },
  //
  components: {
    MuiContainer: {
      defaultProps: {
        fixed: true,
      },
      styleOverrides: {
        root: {
          // padding: '0 !important',
        },
      },
    },

    MuiButtonBase: {
      styleOverrides: {
        root: {
          // color: '#000!important',
          '&&&:hover': {
            backgroundColor: 'transparent',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: '#fff',
          color: '#000',
          boxShadow: 'none',
          borderBottom: '1px solid #eee',
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: '#1652f0',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          padding: 27,
          textTransform: 'unset',
          backgroundColor: '#fff',
          '&.Mui-selected': {
            color: '#1652f0',
          },
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '72px !important',
        },
      },
    },
  },
});
