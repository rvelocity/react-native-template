import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type TabsProps = {
  // Define props here
};

const Tabs: React.FC<TabsProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Tabs Component</Text>
    </View>
  );
};

export default Tabs;
