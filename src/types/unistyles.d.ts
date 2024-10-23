import { breakpoints } from '../theme';

type AppBreakpoints = typeof breakpoints;

declare module '@grapp/stacks' {
  export interface StacksBreakpoints extends AppBreakpoints {}
}
