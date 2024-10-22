import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  // Text field variants
  default: {
    height: 46,
    flexGrow: 1,
    width: 'auto',
    backgroundColor: theme.colors.background,
    borderColor: theme.colors.darkGray,
    paddingHorizontal: 4,
    color: theme.colors.darkGray,
    overflow: 'hidden',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderRadius: 4
  },
  textInput: { flex: 1 },
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
    height: 56
  },
  md: {
    height: 46
  },
  sm: {
    height: 40
  }
}));

export default stylesheet;
