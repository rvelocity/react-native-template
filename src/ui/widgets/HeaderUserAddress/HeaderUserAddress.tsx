import { useNavigation } from '@react-navigation/native';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Clickable from '@/ui/elements/Clickable';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView';
import Icon from '@/ui/elements/media-icons/Icon';
import IconButton from '@/ui/elements/media-icons/IconButton';
import Text from '@/ui/elements/Text';
import stylesheet from './styles';

type UserAddressHeaderProps = {
  variant?: 'default' | 'detailed';
};

const UserAddressHeader: FC<UserAddressHeaderProps> = ({ variant = 'default' }) => {
  const { styles } = useStyles(stylesheet);
  const { navigate } = useNavigation();

  const handleProfileNavigation = () => {
    navigate('ProfileStack');
  };

  const renderDefaultVariant = () => (
    <View style={styles.locationRow}>
      <Icon variant="vector" type="octicon" icon="location" size={28} />
      <View>
        <Text numberOfLines={1} variant="bodyEmphasized">
          Home
        </Text>
        <Text numberOfLines={1} color="darkGray">
          Rakesh Layout 5, Beltarodi road
        </Text>
      </View>
    </View>
  );

  const renderDetailedVariant = () => (
    <View>
      <Text variant="bodyMedium" color="gray">
        Deliver in 15 minutes
      </Text>
      <View style={styles.locationContainer}>
        <Text variant="titleLarge" style={styles.locationText}>
          Home - HSR Layout
        </Text>
        <Icon variant="vector" type="fa5" icon="chevron-down" size={18} color="gray" />
      </View>
    </View>
  );

  return (
    <ContentSafeView>
      <View style={styles.headerContainer}>
        <View style={styles.headerRow}>
          <Clickable>
            {variant === 'default' ? renderDefaultVariant() : renderDetailedVariant()}
          </Clickable>
          <Clickable onPress={handleProfileNavigation}>
            <IconButton variant="image" icon="avatar" size={34} />
          </Clickable>
        </View>
      </View>
    </ContentSafeView>
  );
};

export default UserAddressHeader;
