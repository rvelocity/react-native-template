/* eslint-disable react/no-unstable-nested-components */
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

  const renderFunction = ({ item }) => {
    return (
      <Restaurant
        variant={orientation === 'horizontal' ? 'small' : 'large'}
        dineIn={dineIn}
        data={item}
        onPress={onPress}
      />
    );
  };

  return (
    <View style={styles.container}>
      <ContentSafeView>
        <Text variant="bodyEmphasized">{title}</Text>
      </ContentSafeView>
      <ScrollView horizontal={true}>
        {orientation === 'horizontal' ? (
          <FlatList
            nestedScrollEnabled
            horizontal={orientation === 'horizontal'}
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderFunction}
            ItemSeparatorComponent={() => <Separator orientation={orientation} />}
            showsHorizontalScrollIndicator={false}
            ListHeaderComponent={<Separator orientation="horizontal" />}
            ListFooterComponent={<Separator orientation="horizontal" />}
          />
        ) : (
          <ContentSafeView>
            <FlatList
              nestedScrollEnabled
              data={data}
              keyExtractor={item => item.id.toString()}
              renderItem={renderFunction}
              ItemSeparatorComponent={() => <Separator orientation={orientation} />}
              showsHorizontalScrollIndicator={false}
            />
          </ContentSafeView>
        )}
      </ScrollView>
    </View>
  );
};

export default RestaurantList;

function Separator({ orientation }: { orientation: 'horizontal' | 'vertical' }) {
  const { styles } = useStyles(stylesheet);

  return (
    <View
      style={orientation === 'horizontal' ? styles.separatorHorizontal : styles.separatorVertical}
    />
  );
}
