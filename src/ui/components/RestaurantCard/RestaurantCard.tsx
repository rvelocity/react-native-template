import { TouchableOpacity, View } from 'react-native';
import React, { FC } from 'react';
import Text from '@/ui/elements/Text/Text.tsx';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type RestaurantCardProps = {
  id: string;
  name: string;
  foodCategories: string[];
  distance: number;
  deliveryTime: string;
  thumbnail: string;
  rating: number;
};

const RestaurantCard: FC<RestaurantCardProps> = ({
  name,
  foodCategories,
  distance,
  deliveryTime,
  thumbnail,
  rating
}) => {
  const { styles } = useStyles(stylesheet);
  const foodCategoriesText = foodCategories.join(' | ');

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image remote image={thumbnail} resizeMode="contain" />
        </View>
        <Text variant="labelExtraProminent">{name}</Text>
        <Text variant="bodySmall">
          {rating} | {deliveryTime} | {distance} KM
        </Text>
        <Text variant="bodySmall" numberOfLines={1} ellipsizeMode="tail">
          {foodCategoriesText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCard;
