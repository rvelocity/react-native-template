import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import {
  CompositeScreenProps,
  type NavigationContainer,
  type NavigatorScreenParams
} from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type ComponentProps } from 'react';

export interface NavigationProps extends Partial<ComponentProps<typeof NavigationContainer>> {}

export type RootNavigatorParamList = {
  UnAuthenticatedStack: NavigatorScreenParams<UnAuthenticatedStackNavigatorParamList>;
  AuthenticatedStack: NavigatorScreenParams<AuthenticatedStackNavigatorParamList>;
};

export type UnAuthenticatedStackNavigatorParamList = {
  Login: undefined;
};

export type AuthenticatedStackNavigatorParamList = {
  Root: NavigatorScreenParams<BottomTabNavigatorParamList>;
  ProfileStack: NavigatorScreenParams<ProfileStackParamList>;
};

export type HomeStackParamList = {
  Home: undefined;
};

export type HomeStackProps<T extends keyof HomeStackParamList> = NativeStackScreenProps<
  HomeStackParamList,
  T
>;

export type FoodStackParamList = {
  Food: undefined;
};

export type MartStackParamList = {
  Mart: undefined;
};

export type DineInStackParamList = {
  DineIn: undefined;
  DineInCategory: undefined;
  DineInRestaurant: undefined;
};

export type DineInStackProps<T extends keyof DineInStackParamList> = NativeStackScreenProps<
  DineInStackParamList,
  T
>;

export type CourierStackParamList = {
  Courier: undefined;
};

export type ProfileStackParamList = {
  Profile: undefined;
};

export type BottomTabNavigatorParamList = {
  HomeStack: NavigatorScreenParams<HomeStackParamList>;
  FoodStack: NavigatorScreenParams<FoodStackParamList>;
  MartStack: NavigatorScreenParams<MartStackParamList>;
  DineInStack: NavigatorScreenParams<DineInStackParamList>;
  CourierStack: NavigatorScreenParams<CourierStackParamList>;
};

export type BottomTabNavigatorScreenProps<T extends keyof BottomTabNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<BottomTabNavigatorParamList, T>,
    AuthenticatedStackNavigatorScreenProps<keyof AuthenticatedStackNavigatorParamList>
  >;

export type RootNavigatorScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;

export type UnAuthenticatedStackNavigatorScreenProps<
  T extends keyof UnAuthenticatedStackNavigatorParamList
> = NativeStackScreenProps<UnAuthenticatedStackNavigatorParamList, T>;

export type AuthenticatedStackNavigatorScreenProps<
  T extends keyof AuthenticatedStackNavigatorParamList
> = NativeStackScreenProps<AuthenticatedStackNavigatorParamList, T>;

declare global {
  namespace ReactNavigation {
    export interface RootParamList
      extends RootNavigatorParamList,
        UnAuthenticatedStackNavigatorParamList,
        AuthenticatedStackNavigatorParamList {}
  }
}
