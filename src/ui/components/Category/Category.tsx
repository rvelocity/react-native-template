// import Text from '@/ui/elements/Text/Text.tsx';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Clickable from '@/ui/elements/Clickable/Clickable.tsx';
import Image from '@/ui/elements/media-icons/Image/Image.tsx';

import stylesheet from './styles';

type CategoryProps = {
  data: any;
  onPress: () => void;
};

const Category: React.FC<CategoryProps> = ({ data, onPress }) => {
  const { styles } = useStyles(stylesheet);

  return (
    <Clickable onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image remote image={data.image} style={styles.imageStyle} resizeMode="contain" />
        </View>
        {/* <Text variant="labelProminent">{category.name}</Text> */}
      </View>
    </Clickable>
  );
};

export default Category;
