import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type ProgressProps = {
  // Define props here
};

const Progress: React.FC<ProgressProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Progress Component</Text>
    </View>
  );
};

export default Progress;
