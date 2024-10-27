import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import Text from '@/ui/elements/Text/Text.tsx';
import Icon from '@/ui/elements/media-icons/Icon/Icon.tsx';
import IconButton from '@/ui/elements/media-icons/IconButton/IconButton.tsx';

type RestaurantCardProps = {
  restaurant: any;
  variant: 'small' | 'large';
};

const RestaurantCard: React.FC<RestaurantCardProps> = ({ variant, restaurant }) => {
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
    <TouchableOpacity onPress={() => {}}>
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
          <Image remote image={restaurant.image} style={styles.imageStyle} resizeMode="cover" />
        </View>
        <View style={footerStyles}>
          <View>
            <Text variant="labelLarge">{restaurant.name}</Text>
            <Text variant="bodySmall" numberOfLines={1} color="darkGray">
              {restaurant.description}
            </Text>
          </View>
          <View style={infoStyles}>
            <Rating rating={restaurant.rating} />
            <DistanceAndTime
              isSmall={isSmallVariant}
              distance={restaurant.distance}
              deliveryTime={restaurant.deliveryTime}
            />
          </View>
        </View>
      </View>
    </TouchableOpacity>
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

export default RestaurantCard;
