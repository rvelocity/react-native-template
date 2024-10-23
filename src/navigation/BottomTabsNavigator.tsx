import {
  BottomTabBarProps,
  createBottomTabNavigator,
  type BottomTabNavigationOptions
} from '@react-navigation/bottom-tabs';
import { type RouteProp } from '@react-navigation/native';
import React, { type FC, type ReactElement } from 'react';

import {
  type AuthenticatedStackNavigatorScreenProps,
  type BottomTabNavigatorParamList
} from '@/types/navigation';

import BottomTabBar from './BottomTabBar';
import { CourierStack } from './stacks/courierStack';
import { DineInStack } from './stacks/dineInStack';
import { FoodStack } from './stacks/foodStack';
import { HomeStack } from './stacks/homeStack';
import { MartStack } from './stacks/martStack';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

interface BottomTabNavigatorProps extends AuthenticatedStackNavigatorScreenProps<'Root'> {}

export const BottomTabNavigator: FC<BottomTabNavigatorProps> = (): ReactElement => {
  const screenOptions = ({}: {
    route: RouteProp<BottomTabNavigatorParamList, keyof BottomTabNavigatorParamList>;
  }): BottomTabNavigationOptions => ({
    tabBarHideOnKeyboard: true,
    headerShown: false
  });

  const tabBar = (props: BottomTabBarProps) => <BottomTabBar {...props} />;

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={tabBar} detachInactiveScreens={false}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="FoodStack" component={FoodStack} />
      <Tab.Screen name="MartStack" component={MartStack} />
      <Tab.Screen name="DineInStack" component={DineInStack} />
      <Tab.Screen name="CourierStack" component={CourierStack} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
