import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';
import React from 'react';

type MartProps = {
  // Define props here
};

const Mart: React.FC<MartProps> = props => {
  return (
    <Screen preset="auto" safeAreaEdges={['top']} contentContainerStyle={{ gap: 24 }}>
      <HeaderWithSearchAndAvatar />
    </Screen>
  );
};

export default Mart;
