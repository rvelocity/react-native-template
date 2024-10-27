import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import Text from '@/ui/elements/Text/Text.tsx';

type FoodCategoryProps = {
  foodCategory: any;
};

const FoodCategory: React.FC<FoodCategoryProps> = ({ foodCategory }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            remote
            image={foodCategory.image}
            style={[styles.imageStyle]}
            resizeMode="contain"
          />
        </View>
        {/* <Text variant="labelProminent">{foodCategory.name}</Text> */}
      </View>
    </TouchableOpacity>
  );
};

export default FoodCategory;
