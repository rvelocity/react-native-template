import {
  CompositeScreenProps,
  type NavigationContainer,
  type NavigatorScreenParams
} from '@react-navigation/native';
import { type NativeStackScreenProps } from '@react-navigation/native-stack';
import { type ComponentProps } from 'react';
import { type BottomTabScreenProps } from '@react-navigation/bottom-tabs';

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
};

export type HomeStackParamList = {
  Home: undefined;
};

export type FoodStackParamList = {
  Food: undefined;
};

export type MartStackParamList = {
  Mart: undefined;
};

export type DineInStackParamList = {
  DineIn: undefined;
};

export type CourierStackParamList = {
  Courier: undefined;
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
