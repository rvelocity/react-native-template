import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useNavigationStore from '@/hooks/useNavigationStore';
import { NavigationProps, RootNavigatorParamList } from '@/types/navigation';

import { AuthenticatedNavigator } from './AuthenticatedNavigator';
import { navigationRef } from './navigationUtils';
import { UnAuthenticatedNavigator } from './UnAuthenticatedNavigator';

export const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export function Navigator(props: NavigationProps) {
  const isLoggedIn = true;
  const { onNavigationStateChange } = useNavigationStore();

  // Ref: https://reactnavigation.org/docs/screen-tracking
  const handleNavigationReadyState = () => {
    handleNavigationStateChange();
  };

  const handleNavigationStateChange = () => {
    onNavigationStateChange();
  };

  return (
    <NavigationContainer
      {...props}
      ref={navigationRef}
      onReady={handleNavigationReadyState}
      onStateChange={handleNavigationStateChange}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isLoggedIn ? (
          <Stack.Screen name="AuthenticatedStack" component={AuthenticatedNavigator} />
        ) : (
          <Stack.Screen name="UnAuthenticatedStack" component={UnAuthenticatedNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
