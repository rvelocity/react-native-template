import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  headerContainer: {
    gap: 24
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  locationRow: {
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8
  },
  locationText: {
    fontWeight: 'bold',
    color: theme.colors.primary
  }
}));

export default stylesheet;
