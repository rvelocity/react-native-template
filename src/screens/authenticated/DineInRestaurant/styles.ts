import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  screenContent: {
    gap: 24
  },
  restaurantImage: {
    height: 210,
    width: '100%'
  },
  infoContainer: {
    gap: 12
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cuisineContainer: {
    gap: 4
  },
  ratingContainer: {
    alignItems: 'flex-end',
    gap: 4
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  }
}));

export default stylesheet;
