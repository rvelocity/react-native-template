import React, { FC } from 'react';
import { FlatList, ScrollView, View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Restaurant from '@/ui/components/Restaurant';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView';
import Text from '@/ui/elements/Text';

import stylesheet from './styles';

type RestaurantListProps = {
  orientation: 'horizontal' | 'vertical';
  dineIn?: boolean;
  title: string;
  data: any[];
  onPress: () => void;
};

const RestaurantList: FC<RestaurantListProps> = ({
  orientation,
  title,
  data,
  onPress,
  dineIn = false
}) => {
  const { styles } = useStyles(stylesheet);
  const isHorizontal = orientation === 'horizontal';

  const renderItem = ({ item }) => (
    <Restaurant
      variant={isHorizontal ? 'small' : 'large'}
      dineIn={dineIn}
      data={item}
      onPress={onPress}
    />
  );

  return (
    <View style={styles.container}>
      <ContentSafeView>
        <Text variant="bodyEmphasized">{title}</Text>
      </ContentSafeView>

      {isHorizontal ? (
        <FlatList
          nestedScrollEnabled
          horizontal
          data={data}
          keyExtractor={item => item.id.toString()}
          renderItem={renderItem}
          ItemSeparatorComponent={() => <Separator orientation="horizontal" />}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={<Separator orientation="horizontal" />}
          ListFooterComponent={<Separator orientation="horizontal" />}
        />
      ) : (
        <ScrollView horizontal>
          <ContentSafeView>
            <FlatList
              nestedScrollEnabled
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={renderItem}
              ItemSeparatorComponent={() => <Separator orientation="vertical" />}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
            />
          </ContentSafeView>
        </ScrollView>
      )}
    </View>
  );
};

export default RestaurantList;

function Separator({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  const { styles } = useStyles(stylesheet);
  const separatorStyle =
    orientation === 'horizontal' ? styles.separatorHorizontal : styles.separatorVertical;

  return <View style={separatorStyle} />;
}
