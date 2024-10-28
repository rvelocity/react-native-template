import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  screenContent: {
    gap: theme.spacing[6]
  }
}));

export default stylesheet;
