import { useScrollToTop } from '@react-navigation/native';
import React, { type PropsWithChildren, type ReactElement, useRef, useState } from 'react';
import {
  type LayoutChangeEvent,
  type StatusBarProps as RNStatusBarProps,
  ScrollView,
  type ScrollViewProps,
  type StyleProp,
  View,
  type ViewStyle
} from 'react-native';

import { type ExtendedEdge, useSafeAreaInsetsStyle } from '@/hooks/useSafeAreaInsetsStyle';
import { type Theme } from '@/theme';

import { useStyles } from 'react-native-unistyles';
import KeyboardAvoidingView from '../../KeyboardAvoidingView';
import StatusBar from '../../StatusBar';
import Loader from '../../feedback/Loader';
import stylesheet from './styles';

type ScreenPreset = 'fixed' | 'scroll' | 'auto';

interface BaseScreenProps extends Omit<RNStatusBarProps, 'backgroundColor'>, PropsWithChildren {
  loading?: boolean;
  background?: keyof Theme['colors'];
  barBackground?: keyof Theme['colors'];
  safeAreaEdges?: ExtendedEdge[];
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}
interface FixedScreenProps extends BaseScreenProps {
  preset?: 'fixed';
}
interface ScrollScreenProps extends BaseScreenProps {
  preset?: 'scroll';
  keyboardShouldPersistTaps?: 'handled' | 'always' | 'never';
  ScrollViewProps?: ScrollViewProps;
}
interface AutoScreenProps extends Omit<ScrollScreenProps, 'preset'> {
  preset?: 'auto';
  scrollEnabledToggleThreshold?: { percent?: number; point?: number };
}

export type ScreenProps = ScrollScreenProps | FixedScreenProps | AutoScreenProps;

const isNonScrolling = (preset?: ScreenPreset): boolean => {
  return preset === 'fixed' || preset === undefined;
};

const useAutoPreset = (
  props: AutoScreenProps
): {
  scrollEnabled: boolean;
  onContentSizeChange: (w: number, h: number) => void;
  onLayout: (e: LayoutChangeEvent) => void;
} => {
  const { preset, scrollEnabledToggleThreshold } = props;
  const { percent = 0.92, point = 0 } = scrollEnabledToggleThreshold ?? {};

  const scrollViewHeight = useRef<null | number>(null);
  const scrollViewContentHeight = useRef<null | number>(null);
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const updateScrollState = (): void => {
    if (scrollViewHeight.current === null || scrollViewContentHeight.current === null) {
      return;
    }

    // check whether content fits the screen then toggle scroll state according to it
    const contentFitsScreen = (function () {
      if (point !== undefined) {
        return scrollViewContentHeight.current < scrollViewHeight.current - point;
      } else {
        return scrollViewContentHeight.current < scrollViewHeight.current * percent;
      }
    })();

    // content is less than the size of the screen, so we can disable scrolling
    if (scrollEnabled && contentFitsScreen) {
      setScrollEnabled(false);
    }

    // content is greater than the size of the screen, so let's enable scrolling
    if (!scrollEnabled && !contentFitsScreen) {
      setScrollEnabled(true);
    }
  };

  const onContentSizeChange = (w: number, h: number): void => {
    // update scroll-view content height
    scrollViewContentHeight.current = h;
    updateScrollState();
  };

  const onLayout = (e: LayoutChangeEvent): void => {
    const { height } = e.nativeEvent.layout;
    // update scroll-view  height
    scrollViewHeight.current = height;
    updateScrollState();
  };

  // update scroll state on every render
  if (preset === 'auto') {
    updateScrollState();
  }

  return {
    scrollEnabled: preset === 'auto' ? scrollEnabled : true,
    onContentSizeChange,
    onLayout
  };
};

const ScreenWithoutScrolling = (props: ScreenProps): ReactElement => {
  const { children, style, contentContainerStyle } = props;
  const { styles } = useStyles(stylesheet);

  return (
    <View style={[styles.outerStyle, style]}>
      <View style={[styles.outerStyle, contentContainerStyle]}>{children}</View>
    </View>
  );
};

const ScreenWithScrolling = (props: ScreenProps): ReactElement => {
  const {
    children,
    keyboardShouldPersistTaps = 'handled',
    ScrollViewProps,
    style,
    contentContainerStyle
  } = props as ScrollScreenProps;

  const { styles } = useStyles(stylesheet);
  const ref = useRef<ScrollView>(null);

  const { scrollEnabled, onContentSizeChange, onLayout } = useAutoPreset(props as AutoScreenProps);

  useScrollToTop(ref);

  return (
    <ScrollView
      {...{ keyboardShouldPersistTaps, scrollEnabled, ref }}
      {...ScrollViewProps}
      onLayout={e => {
        onLayout(e);
        ScrollViewProps?.onLayout?.(e);
      }}
      onContentSizeChange={(w: number, h: number) => {
        onContentSizeChange(w, h);
        ScrollViewProps?.onContentSizeChange?.(w, h);
      }}
      style={[styles.outerStyle, ScrollViewProps?.style, style]}
      contentContainerStyle={[ScrollViewProps?.contentContainerStyle, contentContainerStyle]}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      {children}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
};

export const Screen: React.FC<ScreenProps> = props => {
  const {
    loading = false,
    background = 'background',
    barBackground = 'transparent',
    barStyle = 'dark-content',
    safeAreaEdges,
    preset
  } = props;

  const { styles, theme } = useStyles(stylesheet);
  const containerInsets = useSafeAreaInsetsStyle(safeAreaEdges);

  return (
    <View
      style={[styles.outerStyle, { backgroundColor: theme.colors[background] }, containerInsets]}>
      <StatusBar backgroundColor={barBackground} translucent barStyle={barStyle} />
      <KeyboardAvoidingView>
        {isNonScrolling(preset) ? (
          <ScreenWithoutScrolling {...props} />
        ) : (
          <ScreenWithScrolling {...props} />
        )}
      </KeyboardAvoidingView>
      {loading && <Loader />}
    </View>
  );
};

export default Screen;
