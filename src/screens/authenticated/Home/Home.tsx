import { HomeStackProps } from '@/types/navigation';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar';
import ServiceCategoryGrid from '@/ui/widgets/ServiceCategoryGrid';
import React from 'react';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

interface HomeProps extends HomeStackProps<'Home'> {}

const Home: React.FC<HomeProps> = props => {
  const { styles } = useStyles(stylesheet);

  return (
    <Screen
      preset="auto"
      safeAreaEdges={['top']}
      background="white"
      contentContainerStyle={styles.screenContent}>
      <HeaderWithSearchAndAvatar />
      <ContentSafeView>
        <ServiceCategoryGrid />
      </ContentSafeView>
    </Screen>
  );
};

export default Home;
