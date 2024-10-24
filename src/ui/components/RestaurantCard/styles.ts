import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 6,
    minHeight: 220,
    height: 'auto',
    maxHeight: 300
  },
  imageContainer: {
    width: '100%',
    height: '70%',
    borderRadius: 20,
    overflow: 'hidden'
  }
}));

export default stylesheet;
