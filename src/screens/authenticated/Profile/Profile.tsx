import React from 'react';
import { useStyles } from 'react-native-unistyles';

import useHeader from '@/hooks/useHeader';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView';
import Header from '@/ui/elements/layout/Header';
import Screen from '@/ui/elements/layout/Screen';
import Text from '@/ui/elements/Text';

import stylesheet from './styles';

type ProfileProps = {
  // Define props here
};

const DineInRestaurantHeader: React.FC = () => (
  <Header>
    <Header.BackAction />
  </Header>
);

const Profile: React.FC<ProfileProps> = props => {
  const { styles } = useStyles(stylesheet);

  useHeader(DineInRestaurantHeader);

  return (
    <Screen
      preset="auto"
      background="white"
      contentContainerStyle={styles.screenContent}
      barBackground="white">
      <ContentSafeView>
        <Text>Courier Component</Text>
        <Text>Courier Component</Text>
        <Text>Courier Component</Text>
      </ContentSafeView>
    </Screen>
  );
};

export default Profile;
