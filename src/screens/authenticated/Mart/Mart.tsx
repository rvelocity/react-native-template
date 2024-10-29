import React from 'react';
import { useStyles } from 'react-native-unistyles';

import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import HeaderSearchBar from '@/ui/widgets/HeaderSearchBar';
import HeaderUserAddress from '@/ui/widgets/HeaderUserAddress';

import stylesheet from './styles';

type MartProps = {
  // Define props here
};

const Mart: React.FC<MartProps> = props => {
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
      <HeaderUserAddress variant="detailed" />
      <HeaderSearchBar />
    </Screen>
  );
};

export default Mart;
