import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type BackgroundProps = {
  // Define props here
};

const Background: React.FC<BackgroundProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Background Component</Text>
    </View>
  );
};

export default Background;
