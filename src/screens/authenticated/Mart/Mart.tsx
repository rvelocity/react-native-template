import React from 'react';
import { useStyles } from 'react-native-unistyles';

import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderWithSearchAndAvatar from '@/ui/widgets/HeaderWithSearchAndAvatar/HeaderWithSearchAndAvatar.tsx';

import stylesheet from './styles';

type MartProps = {
  // Define props here
};

const Mart: React.FC<MartProps> = props => {
  const { styles } = useStyles(stylesheet);

  return (
    <Screen preset="auto" safeAreaEdges={['top']} contentContainerStyle={styles.screenContent}>
      <HeaderWithSearchAndAvatar />
    </Screen>
  );
};

export default Mart;
