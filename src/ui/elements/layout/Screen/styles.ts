import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  outerStyle: {
    flex: 1,
    height: '100%',
    width: '100%'
  },
  bottomSpacing: {
    height: 80
  }
}));

export default stylesheet;
