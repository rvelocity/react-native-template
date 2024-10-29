import React from 'react';
import { useStyles } from 'react-native-unistyles';

import { HomeStackProps } from '@/types/navigation';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderSearchBar from '@/ui/widgets/HeaderSearchBar';
import HeaderUserAddress from '@/ui/widgets/HeaderUserAddress';
import ServiceCategoryGrid from '@/ui/widgets/ServiceCategoryGrid';

import stylesheet from './styles';

type HomeProps = HomeStackProps<'Home'>;

const Home: React.FC<HomeProps> = props => {
  const { styles } = useStyles(stylesheet);

  return (
    <Screen
      preset="auto"
      safeAreaEdges={['top']}
      background="white"
      contentContainerStyle={styles.screenContent}
      ScrollViewProps={{
        stickyHeaderIndices: [1]
      }}>
      <HeaderUserAddress />
      <HeaderSearchBar />
      <ContentSafeView>
        <ServiceCategoryGrid />
      </ContentSafeView>
    </Screen>
  );
};

export default Home;
