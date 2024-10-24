import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';
import Text from '@/ui/elements/Text/Text.tsx';

type FoodCategoryProps = {
  thumbnail: string;
  title: string;
};

const FoodCategory: React.FC<FoodCategoryProps> = ({ thumbnail, title }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <TouchableOpacity onPress={() => {}}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image remote image={thumbnail} style={[styles.imageStyle]} resizeMode="contain" />
        </View>
        <Text variant="labelProminent">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default FoodCategory;
