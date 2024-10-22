import { AuthenticatedStackNavigatorParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabsNavigator';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ animation: 'slide_from_bottom' }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
