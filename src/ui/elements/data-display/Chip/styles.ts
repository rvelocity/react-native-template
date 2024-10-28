import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  base: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6
  },
  contained: {
    backgroundColor: theme.colors.secondary
  },
  outlined: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.gray
  }
}));

export default stylesheet;
