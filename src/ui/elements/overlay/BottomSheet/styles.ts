import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  fullWidth: {
    height: '100%',
    width: '100%'
  },
  container: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    padding: 5
  },
  closeButton: {
    zIndex: 50,
    alignSelf: 'center',
    marginBottom: 10
  },
  sheetContent: {
    backgroundColor: 'white',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    paddingVertical: 24,
    elevation: 40
  }
}));

export default stylesheet;
