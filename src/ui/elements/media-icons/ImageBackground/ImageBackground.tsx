import React from 'react';
import { Text, View } from 'react-native';

import styles from './styles';

type ImageBackgroundProps = {
  // Define props here
};

const ImageBackground: React.FC<ImageBackgroundProps> = props => {
  return (
    <View style={styles.container}>
      <Text>ImageBackground Component</Text>
    </View>
  );
};

export default ImageBackground;
