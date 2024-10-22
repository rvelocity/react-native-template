import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type MartProps = {
  // Define props here
};

const Mart: React.FC<MartProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Mart Component</Text>
    </View>
  );
};

export default Mart;
