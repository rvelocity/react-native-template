import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type SnackbarProps = {
  // Define props here
};

const Snackbar: React.FC<SnackbarProps> = props => {
  return (
    <View style={styles.container}>
      <Text>Snackbar Component</Text>
    </View>
  );
};

export default Snackbar;
