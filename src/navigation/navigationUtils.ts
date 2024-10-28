import { createNavigationContainerRef } from '@react-navigation/native';
// import { useEffect } from 'react';
// import { BackHandler } from 'react-native';

export const INITIAL_ROUTES_NAMES = ['Login'];
export const SHOW_TAB_BAR_ROUTES_NAMES = ['Home', 'Food', 'Mart', 'DineIn', 'Courier'];
// const EXIT_ROUTES = ['Login'];

export const navigationRef = createNavigationContainerRef();

export const getCurrentRouteInfo = () => {
  return navigationRef.isReady() ? navigationRef.getCurrentRoute() : null;
};

export const canGoBack = (): boolean => {
  return navigationRef.isReady() && navigationRef.canGoBack();
};

export const navigate = (name: string) => {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as never);
  }
};

// Will check later
/* export const usePreventBackNavigation = () => {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      if (!navigationRef.isReady()) {
        return false;
      }

      if (EXIT_ROUTES.includes(navigationRef.getCurrentRoute()?.name as string)) {
        BackHandler.exitApp();
        return true;
      }
      return false;
    });

    return () => {
      backHandler.remove();
    };
  }, []);
}; */
