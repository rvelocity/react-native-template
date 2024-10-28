import { AuthenticatedStackNavigatorParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabsNavigator';
import { ProfileStack } from './stacks/profileStack';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Root" component={BottomTabNavigator} />
      <Stack.Screen name="ProfileStack" component={ProfileStack} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
