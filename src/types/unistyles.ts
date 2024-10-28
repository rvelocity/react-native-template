import { breakpoints, darkTheme, lightTheme } from '../theme';

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export type UnistylesBreakpoints = AppBreakpoints;
  export type UnistylesThemes = AppThemes;
}

import { UnistylesRegistry } from 'react-native-unistyles';

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme
  })
  .addConfig({
    adaptiveThemes: true
  });
