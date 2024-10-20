import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  }
}));

export default stylesheet;
