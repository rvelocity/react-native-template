import { useSafeAreaInsetsStyle } from '@/hooks/useSafeAreaInsetsStyle';
import { lightTheme } from '@/theme';
import IconButton from '@/ui/elements/media-icons/IconButton';
import Text from '@/ui/elements/Text';
import { IconKeys } from '@/utils';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import React, { type ReactElement } from 'react';
import { StyleSheet, TouchableWithoutFeedback, View } from 'react-native';

const TITLE_ICON_MAPPING = {
  HomeStack: { type: 'octicon', icon: 'home', title: 'Home' },
  FoodStack: { type: 'ionicon', icon: 'fast-food-outline', title: 'Food' },
  MartStack: { type: 'material', icon: 'local-grocery-store', title: 'Mart' },
  DineInStack: { type: 'fa5', icon: 'concierge-bell', title: 'Dine In' },
  CourierStack: { type: 'materialCommunity', icon: 'truck-outline', title: 'Courier' }
};

const BottomTabIcon = ({ focused, route }: { route: string; focused: boolean }): ReactElement => {
  const icon = TITLE_ICON_MAPPING[route as keyof typeof TITLE_ICON_MAPPING];
  const color = focused ? 'primary' : 'gray';

  return (
    <IconButton
      variant="vector"
      type={icon.type as IconKeys}
      icon={icon.icon}
      color={color}
      size={20}
    />
  );
};

const BottomTabBar = ({ state, navigation }: BottomTabBarProps): ReactElement => {
  const bottomPadding = useSafeAreaInsetsStyle(['bottom']);

  return (
    <View style={[bottomPadding]}>
      <View style={styles.tabBarContainer}>
        {state.routes.map((route, index) => {
          const isFocused = state.index === index;
          const routeName = route.name;

          const onPress = (): void => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <TouchableWithoutFeedback
              key={route.key}
              onPress={onPress}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}>
              <View style={styles.tabBarItem}>
                <BottomTabIcon focused={isFocused} route={route.name} />
                <Text
                  variant="captionSmall"
                  style={[styles.tabLabel, isFocused && styles.focusedTabLabel]}>
                  {TITLE_ICON_MAPPING[routeName as keyof typeof TITLE_ICON_MAPPING].title}
                </Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBarContainer: {
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: lightTheme.colors.secondary
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabLabel: {
    color: lightTheme.colors.darkGray,
    fontWeight: 900
  },
  focusedTabLabel: {
    color: lightTheme.colors.text
  }
});

export default BottomTabBar;
