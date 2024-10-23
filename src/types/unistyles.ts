import { UnistylesRegistry } from 'react-native-unistyles';
import { darkTheme, lightTheme, breakpoints } from '../theme';

type AppBreakpoints = typeof breakpoints;

type AppThemes = {
  light: typeof lightTheme;
  dark: typeof darkTheme;
};

declare module 'react-native-unistyles' {
  export interface UnistylesBreakpoints extends AppBreakpoints {}
  export interface UnistylesThemes extends AppThemes {}
}

declare module '@grapp/stacks' {
  export interface StacksBreakpoints extends AppBreakpoints {}
}

UnistylesRegistry.addBreakpoints(breakpoints)
  .addThemes({
    light: lightTheme,
    dark: darkTheme
  })
  .addConfig({
    adaptiveThemes: true
  });
