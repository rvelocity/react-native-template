import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: { width: '100%', alignItems: 'center', height: 56 },
  splitBoxes: {
    alignItems: 'center',
    borderRadius: 5,
    borderWidth: 1.15,
    height: 55,
    justifyContent: 'center',
    minWidth: 50
  },
  splitBoxesFocused: {
    borderColor: theme.colors.primary
  },
  splitBoxesUnFocused: {
    borderColor: theme.colors.secondary
  },
  splitOTPBoxesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%',
    zIndex: 1000
  },
  textInput: {
    borderWidth: 1,
    height: 55,
    opacity: 0,
    position: 'absolute',
    width: '100%',
    zIndex: 1
  }
}));

export default stylesheet;
