/* eslint-disable react/no-unstable-nested-components */
import Chip from '@/ui/elements/data-display/Chip/Chip.tsx';
import Icon from '@/ui/elements/media-icons/Icon/Icon.tsx';
import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles.ts';

type FiltersProps = {
  // Define props here
};

const Filters: React.FC<FiltersProps> = props => {
  return (
    <ScrollView horizontal>
      <View style={styles.container}>
        <Chip
          variant="outlined"
          onPress={() => {}}
          right={() => (
            <Icon icon={'sliders'} type="feather" variant="vector" size={14} color="gray" />
          )}>
          Filter
        </Chip>
        <Chip
          variant="outlined"
          onPress={() => {}}
          right={() => (
            <Icon icon={'chevron-down'} type="feather" variant="vector" size={16} color="gray" />
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
