import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar';
import ServiceCategoryGrid from '@/ui/widgets/ServiceCategoryGrid';
import React from 'react';

type HomeProps = {
  // Define props here
};

const Home: React.FC<HomeProps> = props => {
  return (
    <Screen preset="auto" safeAreaEdges={['top']} background="white">
      <ContentSafeView>
        <HeaderWithSearchAndAvatar />
        <ServiceCategoryGrid />
      </ContentSafeView>
    </Screen>
  );
};

export default Home;
