import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type CourierProps = {
  // Define props here
};

const Courier: React.FC<CourierProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Courier Component</Text>
    </View>
  );
};

export default Courier;
