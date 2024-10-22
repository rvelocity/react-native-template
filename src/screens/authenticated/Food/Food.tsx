import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type FoodProps = {
  // Define props here
};

const Food: React.FC<FoodProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Food Component</Text>
    </View>
  );
};

export default Food;
