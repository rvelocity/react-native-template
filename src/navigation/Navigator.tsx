import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import useNavigationStore from '@/hooks/useNavigationStore';
import { NavigationProps, RootNavigatorParamList } from '@/types/navigation';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthenticatedNavigator } from './AuthenticatedNavigator';
import { UnAuthenticatedNavigator } from './UnAuthenticatedNavigator';
import { navigationRef } from './navigationUtils';

export const Stack = createNativeStackNavigator<RootNavigatorParamList>();

export const Navigator = (props: NavigationProps) => {
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
};

export default Navigator;
