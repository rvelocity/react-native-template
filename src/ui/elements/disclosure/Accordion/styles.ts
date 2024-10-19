import {createStyleSheet} from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    width: '100%',
  },
  item: {
    marginBottom: 8,
    borderRadius: 2,
    overflow: 'hidden',
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray,
  },
  trigger: {
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    paddingVertical: 15,
    borderTopWidth: 1,
    borderStyle: 'dotted',
    borderTopColor: theme.colors.gray,
  },
}));

export default stylesheet;
