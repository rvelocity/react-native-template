import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';
import React from 'react';

type DineInProps = {
  // Define props here
};

const DineIn: React.FC<DineInProps> = props => {
  return (
    <Screen preset="auto" safeAreaEdges={['top']}>
      <ContentSafeView gap={16}>
        <HeaderWithSearchAndAvatar />
      </ContentSafeView>
    </Screen>
  );
};

export default DineIn;
