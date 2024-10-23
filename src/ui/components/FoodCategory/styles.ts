import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 8
  },
  imageContainer: {
    width: 80,
    height: 80,
    borderRadius: 40,
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    aspectRatio: 1
  }
}));

export default stylesheet;
