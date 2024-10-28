import Clickable from '@/ui/elements/Clickable/Clickable.tsx';
import Text from '@/ui/elements/Text/Text.tsx';
import Icon from '@/ui/elements/media-icons/Icon/Icon.tsx';
import IconButton from '@/ui/elements/media-icons/IconButton/IconButton.tsx';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';

type RestaurantProps = {
  variant: 'small' | 'large';
  dineIn?: boolean;
  data: any;
  onPress: () => void;
};

const Restaurant: React.FC<RestaurantProps> = ({ variant, data, onPress, dineIn = false }) => {
  const { styles } = useStyles(stylesheet);

  const isSmallVariant = variant === 'small';

  const containerStyles = [
    styles.container,
    isSmallVariant ? styles.smallContainer : styles.largeContainer
  ];

  const imageContainerStyles = [
    styles.imageContainer,
    isSmallVariant ? styles.imageContainerSmall : styles.imageContainerLarge
  ];

  const footerStyles = isSmallVariant ? styles.footerSmall : styles.footerLarge;

  const infoStyles = isSmallVariant ? styles.infoSmall : styles.infoLarge;

  return (
    <Clickable onPress={onPress}>
      <View style={containerStyles}>
        <View style={imageContainerStyles}>
          <View style={styles.wishlistIcon}>
            <IconButton
              variant="vector"
              icon="heart"
              type="feather"
              size={16}
              iconStyle="contained"
            />
          </View>
          <Image remote image={data.image} style={styles.imageStyle} resizeMode="cover" />
        </View>
        <View style={footerStyles}>
          <View style={styles.titleDescription}>
            <Text variant="labelLarge" numberOfLines={1}>
              {data.name}
            </Text>
            <Text variant="bodySmall" numberOfLines={1} color="darkGray">
              {data.description}
            </Text>
          </View>
          <View style={infoStyles}>
            <Rating rating={data.rating} />
            <DistanceAndTime
              isSmall={isSmallVariant}
              distance={data.distance}
              deliveryTime={data.deliveryTime}
            />
          </View>
        </View>
        {dineIn && <AddressAndPrice address={data.address} dineInPrice={data.dineInPrice} />}
      </View>
    </Clickable>
  );
};

const Rating = ({ rating }: { rating: number }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.ratingContainer}>
      <Icon variant="vector" type="entypo" icon="star" size={16} color="warning" />
      <Text variant="bodySmall" color="gray">
        {rating}
      </Text>
    </View>
  );
};

const DistanceAndTime = ({
  isSmall,
  distance,
  deliveryTime
}: {
  isSmall: boolean;
  distance: string;
  deliveryTime: string;
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.distanceAndTimeContainer}>
      {isSmall && (
        <Text variant="bodySmall" color="gray">
          |
        </Text>
      )}
      <Text variant="bodySmall" color="gray">
        {distance}
      </Text>
      <Text variant="bodySmall" color="gray">
        |
      </Text>
      <Text variant="bodySmall" color="gray">
        {deliveryTime}
      </Text>
    </View>
  );
};

const AddressAndPrice = ({ address, dineInPrice }: { address: string; dineInPrice: string }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.addressAndPriceContainer}>
      <Text variant="bodySmall" color="gray">
        {address}
      </Text>
      <Text variant="bodySmall" color="gray">
        {dineInPrice}
      </Text>
    </View>
  );
};

export default Restaurant;
