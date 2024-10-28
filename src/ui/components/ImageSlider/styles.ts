import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(() => ({
  container: {
    gap: 16
  },
  imageContainer: {
    width: 146,
    height: 176,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden'
  },
  separatorSm: {
    width: 8
  },
  separatorLg: {
    width: 16
  }
}));

export default stylesheet;
