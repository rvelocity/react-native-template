import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  container: {
    flexDirection: 'column',
    alignItems: 'center'
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: 'hidden'
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  }
}));

export default stylesheet;
