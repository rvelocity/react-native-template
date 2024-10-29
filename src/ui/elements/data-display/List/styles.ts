import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  accordionContainer: {
    marginBottom: 16
  },
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  accordionContent: {
    flex: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center'
  },
  accordionBody: {
    marginTop: 10
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12
  },
  listItemContent: {
    flex: 1,
    marginLeft: 12
  },
  listItemTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  divider: {
    marginTop: 8
  },
  listSection: {
    marginVertical: 8
  },
  listSubHeader: {
    paddingVertical: 8
  }
}));

export default stylesheet;
