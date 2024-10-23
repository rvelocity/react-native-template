import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  dotIndicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 8
  },
  dot: {
    alignItems: 'center',
    borderRadius: 24,
    marginHorizontal: 2
  },
  indicatorText: {
    fontSize: 8
  },
  lineIndicatorContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    overflow: 'hidden',
    backgroundColor: theme.colors.secondary,
    borderRadius: 9999,
    marginVertical: 8
  },
  lineIndicator: {
    borderRadius: 4,
    height: 5
  },
  itemContainer: {
    marginVertical: 8
  },
  separator: { width: 12 }
}));

export default stylesheet;
