import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type HomeProps = {
  // Define props here
};

const Home: React.FC<HomeProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Home Component</Text>
    </View>
  );
};

export default Home;
