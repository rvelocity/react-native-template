import Clickable from '@/ui/elements/Clickable/Clickable.tsx';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';
// import Text from '@/ui/elements/Text/Text.tsx';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type CategoryProps = {
  category: any;
};

const Category: React.FC<CategoryProps> = ({ category }) => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation();

  const navigateToCategory = () => {
    navigate('DineInCategory');
  };

  return (
    <Clickable onPress={navigateToCategory}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image remote image={category.image} style={[styles.imageStyle]} resizeMode="contain" />
        </View>
        {/* <Text variant="labelProminent">{category.name}</Text> */}
      </View>
    </Clickable>
  );
};

export default Category;
