import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    borderColor: theme.colors.secondary
  },
  line: {
    borderStyle: 'solid'
  },
  dotted: {
    borderStyle: 'dotted'
  },
  dashed: {
    borderStyle: 'dashed'
  },
  horizontal: {
    width: '100%',
    borderTopWidth: 1
  },
  vertical: {
    height: 'auto',
    borderLeftWidth: 1
  }
}));

export default stylesheet;
