import React, { type FC } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Mart from '@/screens/authenticated/Mart';
import { type BottomTabNavigatorScreenProps, type MartStackParamList } from '@/types/navigation';
import { NAVIGATIONS } from '@/constants/navigation';

const Stack = createNativeStackNavigator<MartStackParamList>();

export const MartStack: FC<BottomTabNavigatorScreenProps<`${NAVIGATIONS.MART}Stack`>> = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationDuration: 0
      }}>
      <Stack.Screen
        name={NAVIGATIONS.MART}
        component={Mart}
        options={{
          headerShown: false
        }}
      />
    </Stack.Navigator>
  );
};
