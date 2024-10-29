/* eslint-disable react/no-unstable-nested-components */
import React, { FC } from 'react';
import { ScrollView, View } from 'react-native';

import Chip from '@/ui/elements/data-display/Chip/Chip';
import Icon from '@/ui/elements/media-icons/Icon/Icon';

import styles from './styles';

type FiltersProps = {
  // Define props here
};

const Filters: FC<FiltersProps> = props => {
  return (
    <ScrollView
      horizontal
      contentContainerStyle={{ paddingHorizontal: 14 }}
      showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <Chip
          variant="outlined"
          onPress={() => {}}
          right={() => (
            <Icon icon="sliders" type="feather" variant="vector" size={14} color="gray" />
          )}>
          Filter
        </Chip>
        <Chip
          variant="outlined"
          onPress={() => {}}
          right={() => (
            <Icon icon="chevron-down" type="feather" variant="vector" size={16} color="gray" />
          )}>
          Sort by
        </Chip>
        <Chip variant="outlined" onPress={() => {}}>
          Within 5km
        </Chip>
        <Chip variant="outlined" onPress={() => {}}>
          Rating 4+
        </Chip>
        <Chip variant="outlined" onPress={() => {}}>
          Open Now
        </Chip>
      </View>
    </ScrollView>
  );
};

export default Filters;
