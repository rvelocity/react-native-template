import React from 'react';
import { FlatList, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView';
import Image from '@/ui/elements/media-icons/Image';
import Text from '@/ui/elements/Text/Text';

import stylesheet from './styles';

type ImageSliderProps = {
  title: string;
  data: any[];
};

const ImageSlider: React.FC<ImageSliderProps> = ({ title, data }) => {
  const { styles } = useStyles(stylesheet);

  const renderFunction = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <Image remote image={item.image} />
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <ContentSafeView>
        <Text variant="bodyEmphasized">{title}</Text>
      </ContentSafeView>

      <FlatList
        horizontal
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderFunction}
        ItemSeparatorComponent={Separator}
        showsHorizontalScrollIndicator={false}
        ListHeaderComponent={<Separator lg />}
        ListFooterComponent={<Separator lg />}
      />
    </View>
  );
};

export default ImageSlider;

function Separator({ lg = false }: { lg: boolean }) {
  const { styles } = useStyles(stylesheet);

  return <View style={lg ? styles.separatorLg : styles.separatorSm} />;
}
