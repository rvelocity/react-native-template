import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Clickable from '@/ui/elements/Clickable';
import Icon from '@/ui/elements/media-icons/Icon';
import IconButton from '@/ui/elements/media-icons/IconButton';
import SearchBar from '@/ui/components/SearchBar/SearchBar';
import Text from '@/ui/elements/Text';
import stylesheet from './styles';

const HeaderWithSearchAndAvatar = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerTopRow}>
        <Clickable>
          <View>
            <Text variant="bodyMedium" color="gray">
              Deliver Now
            </Text>
            <View style={styles.locationContainer}>
              <Text variant="headlineSmall" style={styles.locationText}>
                Hsr Layout
              </Text>
              <Icon variant="vector" type="fa5" icon="chevron-down" size={18} />
            </View>
          </View>
        </Clickable>
        <Clickable>
          <IconButton variant="image" icon="avatar" size={34} />
        </Clickable>
      </View>
      <SearchBar editable={false} placeholder="Search food, grocery and more" />
    </View>
  );
};

export default HeaderWithSearchAndAvatar;
