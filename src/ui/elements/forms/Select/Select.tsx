import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type SelectProps = {
  // Define props here
};

const Select: React.FC<SelectProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Select Component</Text>
    </View>
  );
};

export default Select;
