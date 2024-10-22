import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar';
import React from 'react';

type HomeProps = {
  // Define props here
};

const Home: React.FC<HomeProps> = props => {
  return (
    <Screen preset="auto" safeAreaEdges={['top']}>
      <ContentSafeView gap={16}>
        <HeaderWithSearchAndAvatar />
      </ContentSafeView>
    </Screen>
  );
};

export default Home;
