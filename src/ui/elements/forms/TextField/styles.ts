import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  // Text field variants
  default: {
    height: 64,
    flexGrow: 1,
    width: 'auto',
    borderColor: theme.colors.darkGray,
    paddingHorizontal: 12,
    color: theme.colors.darkGray,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 8
  },
  textInput: { flex: 1 },
  contained: {
    backgroundColor: theme.colors.secondary
  },
  outlined: {
    borderWidth: 1,
    backgroundColor: 'transparent',
    borderColor: theme.colors.gray,
    borderRadius: 4
  },
  underlined: {
    borderBottomWidth: 1
  },
  // Text Field Size
  lg: {
    height: 64
  },
  md: {
    height: 50
  },
  sm: {
    height: 46
  }
}));

export default stylesheet;
