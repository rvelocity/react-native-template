import Text from '@/ui/elements/Text';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView';
import Screen from '@/ui/elements/layout/Screen';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';
import Header from '@/ui/elements/layout/Header';
import useHeader from '@/hooks/useHeader';

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
