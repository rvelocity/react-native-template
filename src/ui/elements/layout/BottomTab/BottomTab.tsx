import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type BottomTabProps = {
  // Define props here
};

const BottomTab: React.FC<BottomTabProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>BottomTab Component</Text>
    </View>
  );
};

export default BottomTab;
