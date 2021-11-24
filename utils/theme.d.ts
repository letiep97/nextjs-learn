import { Theme, ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface CustomTheme extends Theme {
    color?: {
      [key: string]: any;
    };
  }
  // allow configuration using `createTheme`
  interface CustomThemeOptions extends ThemeOptions {
    color?: {
      [key: string]: any;
    };
  }
  export function createTheme(options?: CustomThemeOptions): CustomTheme;
}
