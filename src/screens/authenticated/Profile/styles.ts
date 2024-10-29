import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  screenContent: {
    gap: 24
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  infoContainer: {
    gap: 2
  },
  phoneText: {
    color: theme.colors.gray
  }
}));

export default stylesheet;
