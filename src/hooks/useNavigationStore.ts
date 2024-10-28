import { ParamListBase } from '@react-navigation/native';
import { create } from 'zustand';

import { createJSONStorage, persist, zustandStorage } from '@/api/storageManager';
import { PERSIST_KEYS } from '@/constants/storageKeys';
import { INITIAL_ROUTES_NAMES, navigationRef } from '@/navigation/navigationUtils';

type RouteKey = keyof ParamListBase | null;

interface NavigationStore {
  initialRoute: RouteKey;
  currentRouteInfo: RouteKey;
  setInitialRoute: (route: RouteKey) => void;
  onNavigationStateChange: () => void;
}

const useNavigationStore = create<NavigationStore>()(
  persist(
    set => ({
      initialRoute: null,
      currentRouteInfo: null,
      setInitialRoute: (route: RouteKey) => set({ initialRoute: route }),
      onNavigationStateChange: () => {
        const currentRouteName = navigationRef.getCurrentRoute()?.name as RouteKey;
        set({ currentRouteInfo: currentRouteName });
        if (INITIAL_ROUTES_NAMES.includes(currentRouteName as string))
          set({ initialRoute: currentRouteName });
      }
    }),
    {
      name: PERSIST_KEYS.initialRoute,
      storage: createJSONStorage(() => zustandStorage),
      partialize: state => ({ initialRoute: state.initialRoute })
    }
  )
);

export default useNavigationStore;
