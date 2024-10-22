import Home from '@/screens/authenticated/Home';
import { AuthenticatedStackNavigatorParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
