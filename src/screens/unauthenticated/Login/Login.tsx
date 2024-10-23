import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles.ts';

type LoginProps = {
  // Define props here
};

const Login: React.FC<LoginProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text>Login Component</Text>
    </View>
  );
};

export default Login;
