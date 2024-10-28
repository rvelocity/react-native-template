import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from '@/screens/authenticated/Profile';
import {
  type ProfileStackParamList,
  AuthenticatedStackNavigatorScreenProps
} from '@/types/navigation';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export const ProfileStack: FC<AuthenticatedStackNavigatorScreenProps<'ProfileStack'>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'default',
        animationDuration: 0
      }}>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
