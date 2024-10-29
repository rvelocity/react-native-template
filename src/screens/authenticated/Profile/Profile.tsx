import useHeader from '@/hooks/useHeader';
import profileMenus from '@/mockData/profileMenus.json';
import Card from '@/ui/elements/Card';
import List from '@/ui/elements/data-display/List';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView';
import Header from '@/ui/elements/layout/Header';
import Screen from '@/ui/elements/layout/Screen';
import Avatar from '@/ui/elements/media-icons/Avatar';
import IconButton from '@/ui/elements/media-icons/IconButton';
import Text from '@/ui/elements/Text';
import { IconKeys } from '@/utils';
import React, { FC } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

const ProfileHeader = () => (
  <Header>
    <Header.BackAction />
  </Header>
);

const ProfileInfo: FC = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.profileContainer}>
      <View style={styles.infoContainer}>
        <Text variant="titleExtraLarge">Vicky John</Text>
        <Text variant="bodyMedium" style={styles.phoneText}>
          +918660301313
        </Text>
      </View>
      <Avatar variant="lg">
        <Avatar.Fallback>Avatar</Avatar.Fallback>
      </Avatar>
    </View>
  );
};

const MembershipCard: FC = () => (
  <Card variant="contained">
    <Card.Content>
      <Text variant="labelExtraProminent">Gold Membership</Text>
      <Text variant="bodySmall">Free delivery on all orders</Text>
    </Card.Content>
    <Card.Actions>
      <Text variant="labelSmall">Know More</Text>
    </Card.Actions>
  </Card>
);

const ProfileMenuList: FC = () => (
  <List>
    {profileMenus.map((menuItem, index) => (
      <List.Item
        key={index}
        title={menuItem.title}
        left={() => (
          <IconButton
            variant="vector"
            type={menuItem.iconType as IconKeys}
            icon={menuItem.icon}
            color="primary"
            size={24}
          />
        )}
        right={() => (
          <IconButton variant="vector" type="octicon" icon="chevron-right" color="gray" size={24} />
        )}
      />
    ))}
  </List>
);

const Profile: FC = () => {
  const { styles } = useStyles(stylesheet);

  useHeader(ProfileHeader);

  return (
    <Screen
      preset="auto"
      background="white"
      contentContainerStyle={styles.screenContent}
      barBackground="white">
      <ContentSafeView>
        <ProfileInfo />
        <MembershipCard />
        <ProfileMenuList />
      </ContentSafeView>
    </Screen>
  );
};

export default Profile;
