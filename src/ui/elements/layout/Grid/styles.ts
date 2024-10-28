import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  flexOne: {
    flex: 1
  },
  flexRow: {
    flexDirection: 'row'
  }
}));

export default stylesheet;
