import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  headerContainer: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 16,
    backgroundColor: theme.colors.white
  },
  headerContent: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  backAndContent: {
    gap: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  actionGroup: {
    gap: 4,
    flexDirection: 'row',
    alignItems: 'center'
  },
  backWrapper: {
    right: 2
  },
  actionWrapper: {
    left: 2
  }
}));

export default stylesheet;
