import DineIn from '@/screens/authenticated/DineIn';
import Food from '@/screens/authenticated/Food';
import Home from '@/screens/authenticated/Home';
import Mart from '@/screens/authenticated/Mart';
import { AuthenticatedStackNavigatorParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import BottomTabNavigator from './BottomTabsNavigator';
import { NAVIGATIONS } from '@/constants/navigation';

const Stack = createNativeStackNavigator<AuthenticatedStackNavigatorParamList>();

export const AuthenticatedNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={NAVIGATIONS.ROOT}
        component={BottomTabNavigator}
        options={{ animation: 'slide_from_bottom' }}
      />
      {/* <Stack.Screen name="Home" component={Home} /> */}
      <Stack.Screen name={NAVIGATIONS.FOOD} component={Food} />
      <Stack.Screen name={NAVIGATIONS.DINE_IN} component={DineIn} />
      <Stack.Screen name={NAVIGATIONS.MART} component={Mart} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
