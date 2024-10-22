import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    height: 146,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    overflow: 'hidden'
  },
  xs: {
    height: 86
  },
  sm: {
    height: 146
  },
  md: {
    height: 192
  },
  lg: {
    height: 213
  },
  imageBanner: {
    flex: 1,
    width: '100%'
  }
}));

export default stylesheet;
