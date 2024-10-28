import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { AuthenticatedStackNavigatorParamList } from '@/types/navigation';

import { ProfileStack } from './stacks/profileStack';
import BottomTabNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export function AuthenticatedNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Stack.Navigator>
  );
}

export default AuthenticatedNavigator;
