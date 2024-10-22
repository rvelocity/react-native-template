import React, { type ReactElement } from 'react';
import { Text, TouchableOpacity, View, ViewStyle } from 'react-native';
import { type BottomTabBarProps } from '@react-navigation/bottom-tabs';
import IconButton from '@/ui/elements/media-icons/IconButton';

const BottomTabIcon = ({
  focused,
  title
}: {
  title: string;
  focused: boolean;
  color?: string;
  size?: number;
}): ReactElement => {
  return (
    <IconButton
      variant="svg"
      {...(focused && { color: 'success' })}
      icon={'menu'}
      color={'primary'}
      size={12}
    />
  );
};

const CustomTabBar = ({ state, descriptors, navigation }: BottomTabBarProps): ReactElement => {
  return (
    <View style={styles.tabBarContainer}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        let label: string;
        if (typeof options.tabBarLabel === 'function') {
          label = options.tabBarLabel({
            focused: isFocused,
            color: '#673ab7',
            position: 'below-icon',
            children: route.name
          }) as string;
        } else {
          label = options.tabBarLabel ?? options.title ?? route.name;
        }

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
          <TouchableOpacity key={route.key} onPress={onPress} style={styles.tabBarItem}>
            <BottomTabIcon focused={isFocused} title={route.name} />
            <Text style={[styles.tabLabel, isFocused && styles.focusedTabLabel]}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

// Styles for the labels
const styles = {
  tabBarContainer: {
    flexDirection: 'row' as ViewStyle['flexDirection'], // Set the direction to row to make it horizontal
    justifyContent: 'space-around' as ViewStyle['justifyContent'], // Distribute items evenly
    alignItems: 'center' as ViewStyle['alignItems'], // Center items vertically
    height: 100, // Adjust the height as needed
    backgroundColor: '#fff', // Set background color if needed
    paddingBottom: 20
  },
  tabBarItem: {
    flex: 1,
    alignItems: 'center' as ViewStyle['alignItems'], // Center items horizontally
    justifyContent: 'center' as ViewStyle['justifyContent'] // Center items vertically
  },
  tabLabel: {
    color: '#222'
  },
  focusedTabLabel: {
    color: '#673ab7'
  }
};

export default CustomTabBar;
