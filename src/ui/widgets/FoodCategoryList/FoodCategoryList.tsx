import FoodCategory from '@/ui/components/FoodCategory';
import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { FlatList, ScrollView } from 'react-native';

type FoodCategoryListProps = {};

const FoodCategoryList: FC<FoodCategoryListProps> = () => {
  const navigation = useNavigation();

  const renderFunction = ({ item }) => {
    return <FoodCategory key={item.id} foodCategory={item} />;
  };

  const numColumns = Math.ceil(categories.length / 2);

  return (
    <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}>
      <FlatList
        numColumns={numColumns}
        data={categories}
        renderItem={renderFunction}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </ScrollView>
  );
};

export default FoodCategoryList;

const categories = [
  {
    id: '3669816',
    name: 'Indian Sweets',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/10/24/f030a47f-b499-4c05-9d19-ab50fc288e07_PCTIleIndianSweets1.png'
  },
  {
    id: '3669817',
    name: 'Indian Sweets',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/10/24/fbe299be-e610-462a-a067-a795883cbb8f_PCTileDiwaliGifting2.png'
  },
  {
    id: '750581',
    name: 'North Indian',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_North%20Indian.png'
  },
  {
    id: '750579',
    name: 'Pizzas',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Pizzas.png'
  },
  {
    id: '750589',
    name: 'Burgers',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_burger.png'
  },
  {
    id: '750591',
    name: 'Biryani',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Biryani.png'
  },
  {
    id: '750201',
    name: 'Paratha',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Paratha.png'
  },
  {
    id: '750587',
    name: 'Chinese',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Chinese.png'
  },
  {
    id: '750131',
    name: 'Dosa',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Dosa.png'
  },
  {
    id: '749868',
    name: 'Cakes',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_cake.png'
  },
  {
    id: '750222',
    name: 'Rolls',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/17/58760e8e-324f-479e-88fa-31800120ea38_Rolls1.png'
  },
  {
    id: '749760',
    name: 'Khichdi',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Khichdi.png'
  },
  {
    id: '750206',
    name: 'Pasta',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/f1263395-5d4a-4775-95dc-80ab6f3bbd89_pasta.png'
  },
  {
    id: '749876',
    name: 'Chole Bhature',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_chole%20bhature.png'
  },
  {
    id: '750585',
    name: 'South Indian',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Salad-1.png'
  },
  {
    id: '749772',
    name: 'Noodles',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Noodles.png'
  },
  {
    id: '750216',
    name: 'Pav Bhaji',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Pav%20Bhaji.png'
  },
  {
    id: '750643',
    name: 'Idli',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Idli.png'
  },
  {
    id: '745861',
    name: 'Shake',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/8f508de7-e0ac-4ba8-b54d-def9db98959e_Shake.png'
  },
  {
    id: '750234',
    name: 'Poori',
    image:
      'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/2/6ef07bda-b707-48ea-9b14-2594071593d1_Poori.png'
  }
];
