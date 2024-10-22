import React, { type FC, type ReactElement } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import {
  type BottomTabNavigationOptions,
  createBottomTabNavigator
} from '@react-navigation/bottom-tabs';
import { type RouteProp } from '@react-navigation/native';
import { lightTheme } from '@/theme';
// import { theme } from '@/theme';
import {
  type AuthenticatedStackNavigatorScreenProps,
  type BottomTabNavigatorParamList
} from '@/types/navigation';

import { HomeStack } from './stacks/homeStack';
import { DineInStack } from './stacks/dineInStack';
import { MartStack } from './stacks/martStack';
import { FoodStack } from './stacks/foodStack';
import CustomTabBar from './CustomTab';
import { NAVIGATIONS } from '@/constants/navigation';
// Import your custom tab bar

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

interface BottomTabNavigatorProps extends AuthenticatedStackNavigatorScreenProps<'Root'> {}

export const BottomTabNavigator: FC<BottomTabNavigatorProps> = (): ReactElement => {
  const { bottom } = useSafeAreaInsets();

  const screenOptions = ({
    route
  }: {
    route: RouteProp<BottomTabNavigatorParamList, keyof BottomTabNavigatorParamList>;
  }): BottomTabNavigationOptions => ({
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarActiveTintColor: '#11111',
    tabBarShowLabel: true,
    headerShadowVisible: false,
    tabBarStyle: { height: 200 + bottom, paddingBottom: bottom },
    tabBarLabelStyle: {
      // fontFamily: lightTheme.typeFaces.bodyLarge.fontFamily,
      fontSize: lightTheme.typeFaces.bodyLarge.fontSize,
      paddingBottom: 6
    }
  });

  return (
    <Tab.Navigator screenOptions={screenOptions} tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen
        name={`${NAVIGATIONS.HOME}Stack`}
        component={HomeStack}
        options={{
          title: NAVIGATIONS.HOME
        }}
      />
      <Tab.Screen
        name={`${NAVIGATIONS.FOOD}Stack`}
        component={FoodStack}
        options={{
          title: NAVIGATIONS.FOOD
        }}
      />
      <Tab.Screen
        name={`${NAVIGATIONS.MART}Stack`}
        component={MartStack}
        options={{
          title: NAVIGATIONS.MART
        }}
      />
      <Tab.Screen
        name={`${NAVIGATIONS.DINE_IN}Stack`}
        component={DineInStack}
        options={{
          title: NAVIGATIONS.DINE_IN
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
