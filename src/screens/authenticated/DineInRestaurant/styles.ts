import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  screenContent: {
    gap: theme.spacing[6]
  },
  restaurantImage: {
    height: 210,
    width: '100%'
  },
  infoContainer: {
    gap: theme.spacing[4]
  },
  detailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  cuisineContainer: {
    gap: theme.spacing[2]
  },
  ratingContainer: {
    alignItems: 'flex-end',
    gap: theme.spacing[2]
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing[1]
  },
  featureContainer: {
    marginVertical: theme.spacing[4]
  },
  actionButtonsContainer: {
    gap: theme.spacing[6]
  }
}));

export default stylesheet;
