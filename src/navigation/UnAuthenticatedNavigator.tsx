import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from '@/screens/unauthenticated/Login';
import { UnAuthenticatedStackNavigatorParamList } from '@/types/navigation';

const Stack = createNativeStackNavigator<UnAuthenticatedStackNavigatorParamList>();

export function UnAuthenticatedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}

export default UnAuthenticatedNavigator;
