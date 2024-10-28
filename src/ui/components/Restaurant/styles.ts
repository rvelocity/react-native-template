import { createStyleSheet } from 'react-native-unistyles';

const stylesheet = createStyleSheet(theme => ({
  container: {
    gap: 4,
    overflow: 'hidden'
  },
  smallContainer: {
    width: 134
  },
  largeContainer: {
    width: '100%'
  },
  imageContainer: {
    borderRadius: 10,
    overflow: 'hidden'
  },
  imageContainerSmall: {
    height: 146
  },
  imageContainerLarge: {
    width: '100%',
    height: 170
  },
  imageStyle: {
    width: '100%',
    height: '100%'
  },
  titleDescription: {
    gap: 4
  },
  footerSmall: {
    gap: 4
  },
  footerLarge: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  infoSmall: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  infoLarge: {
    alignItems: 'flex-end',
    gap: 4
  },
  wishlistIcon: {
    position: 'absolute',
    right: 12,
    top: 12,
    zIndex: 999
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4
  },
  distanceAndTimeContainer: {
    flexDirection: 'row',
    gap: 4
  },
  addressAndPriceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
}));

export default stylesheet;
