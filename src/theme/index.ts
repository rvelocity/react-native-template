import darkColors from './darkMode';
import lightColors from './lightMode';
import spacing from './spacing';
import shadows from './shadows';
import typeFaces from './typography';
import { stacks } from './stacks';
export * from './breakpoints';

export const darkTheme = {
  colors: darkColors,
  typeFaces,
  spacing,
  shadows,
  stacks
} as const;

export const lightTheme = {
  colors: lightColors,
  typeFaces,
  spacing,
  shadows,
  stacks
} as const;

export type Theme = typeof lightTheme;
