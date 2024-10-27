import RestaurantCard from '@/ui/components/RestaurantCard';
import Text from '@/ui/elements/Text';
import React, { FC } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type RestaurantCardListProps = {
  orientation: 'horizontal' | 'vertical';
  dineIn?: boolean;
  title: string;
};

const RestaurantCardList: FC<RestaurantCardListProps> = ({
  orientation,
  title,
  dineIn = false
}) => {
  const { styles } = useStyles(stylesheet);

  const renderFunction = ({ item }) => {
    return (
      <RestaurantCard
        variant={orientation === 'horizontal' ? 'small' : 'large'}
        dineIn={dineIn}
        restaurant={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <Text variant="bodyEmphasized">{title}</Text>

      <FlatList
        horizontal={orientation === 'horizontal'}
        data={restaurants}
        keyExtractor={item => item.id.toString()}
        renderItem={renderFunction}
        ItemSeparatorComponent={() => <Separator orientation={orientation} />}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default RestaurantCardList;

const Separator = ({ orientation }: { orientation: 'horizontal' | 'vertical' }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View
      style={orientation === 'horizontal' ? styles.separatorHorizontal : styles.separatorVertical}
    />
  );
};

const restaurants = [
  {
    id: '881203',
    name: 'Chinese Wok',
    description: 'Chinese, Asian, Tibetan, Desserts',
    rating: 4.4,
    distance: '3.0 km',
    deliveryTime: '35-40 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/7/2b1d78bb-5604-46db-99ba-02de93dc58a2_881203.jpg',
    address: 'Tukoganj Main road, Treasure Island Indore',
    dineInPrice: '₹250 for two'
  },
  {
    id: '65543',
    name: 'Pizza Hut',
    description: 'Pizzas',
    rating: 4.3,
    distance: '1.4 km',
    deliveryTime: '20-25 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/3e29a7b8-2ada-411f-977f-a7ecfe0f8f6e_65543.jpg',
    address: 'Saket Square, Old Palasia',
    dineInPrice: '₹350 for two'
  },
  {
    id: '729652',
    name: 'Burger Farm',
    description: 'Burgers, Fast Food',
    rating: 4.4,
    distance: '3.0 km',
    deliveryTime: '20-25 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/10/213a964e-8671-4d10-aed6-4d5f0b4e2441_729652.JPG',
    address: 'Street no 1, South Tukoganj',
    dineInPrice: '₹300 for two'
  },
  {
    id: '73884',
    name: 'KFC',
    description: 'Burgers, Fast Food, Rolls & Wraps',
    rating: 4.2,
    distance: '2.4 km',
    deliveryTime: '30-35 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/4/17/34bdc0b9-123a-44a8-b07a-12055c8ba41f_73884.JPG',
    address: 'Malhar Mega Mall, Vijay Nagar',
    dineInPrice: '₹400 for two'
  },
  {
    id: '62186',
    name: 'Subway',
    description: 'Healthy Food, Salads, Snacks, Desserts, Beverages',
    rating: 4.1,
    distance: '1.4 km',
    deliveryTime: '20-25 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/25/3227c9b2-0448-4fa5-a9df-a479499a3aeb_62186.jpg',
    address: 'Saket Square, Old Palasia',
    dineInPrice: '₹250 for two'
  },
  {
    id: '65330',
    name: "Domino's Pizza",
    description: 'Pizzas, Italian, Pastas, Desserts',
    rating: 4.2,
    distance: '1.4 km',
    deliveryTime: '20-25 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/10/24/735ef9b3-c7fb-47d3-bf0b-f38ca0ec38d9_65330.JPG',
    address: 'Old Palasia, Navneet Tower Road',
    dineInPrice: '₹400 for two'
  },
  {
    id: '64814',
    name: 'The Belgian Waffle Co.',
    description: 'Waffle, Desserts, Ice Cream, Beverages',
    rating: 4.6,
    distance: '1.2 km',
    deliveryTime: '25-30 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/5116a385bac0548e06c33c08350fbf11',
    address: 'Old Palasia',
    dineInPrice: '₹200 for two'
  },
  {
    id: '806682',
    name: 'Burger King',
    description: 'Burgers, American',
    rating: 4.3,
    distance: '2.4 km',
    deliveryTime: '30-35 mins',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/a5cee281-c25f-494a-8cab-ba7f49acfb03_806682.JPG',
    address: 'Indore, Malhar Mall',
    dineInPrice: '₹350 for two'
  }
];
