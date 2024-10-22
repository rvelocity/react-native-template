import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type DineInProps = {
  // Define props here
};

const DineIn: React.FC<DineInProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>DineIn Component</Text>
    </View>
  );
};

export default DineIn;
