import React, { type PropsWithChildren, type ReactElement, useRef, useState } from 'react';
import {
  Animated,
  FlatList,
  type NativeScrollEvent,
  type NativeSyntheticEvent,
  View,
  Text
} from 'react-native';

import useDimensions from '@/hooks/useDimensions';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

export enum IndicatorType {
  DOT = 'dot',
  LINE = 'line'
}

type CarouselProps = PropsWithChildren & {
  snapToInterval?: number;
  indicator?: IndicatorType;
  pagingEnabled?: boolean;
};

export const Carousel = ({
  children,
  snapToInterval,
  indicator = IndicatorType.DOT,
  pagingEnabled = false
}: CarouselProps): ReactElement => {
  const { styles, theme } = useStyles(stylesheet);

  const dimensions = useDimensions('window');
  const safeWidth = dimensions.width - 20 - 20;

  const childrenCount = React.Children.toArray(children).filter(child =>
    React.isValidElement(child)
  );

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const scrollX = useRef(new Animated.Value(0)).current;

  const renderItem = ({ item }: { item: ReactElement }): ReactElement => {
    return <>{item}</>;
  };

  const width = snapToInterval ?? safeWidth;

  const onScrollDot = (e: NativeSyntheticEvent<NativeScrollEvent>): void => {
    const { x } = e.nativeEvent.contentOffset;
    setCurrentIndex(Math.ceil(+(x / width)));
  };

  const onScrollLine = Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], {
    useNativeDriver: false
  });

  const renderDotIndicator = (): ReactElement => {
    return (
      <View
        style={[
          styles.dotIndicatorContainer,
          {
            width: safeWidth
          }
        ]}>
        {childrenCount.map((_, index) => {
          return (
            <View
              key={index}
              style={[
                styles.dot,
                // eslint-disable-next-line react-native/no-inline-styles
                {
                  width: currentIndex === index ? 26 : 8,
                  height: currentIndex === index ? 12 : 8,
                  backgroundColor: currentIndex === index ? theme.colors.primary : theme.colors.gray
                }
              ]}>
              {currentIndex === index && (
                <Text style={[styles.indicatorText, { color: theme.colors.white }]}>
                  {index + 1}/{childrenCount.length}
                </Text>
              )}
            </View>
          );
        })}
      </View>
    );
  };

  const containerWidth = 45;

  const renderLineIndicator = (): ReactElement => {
    const segmentWidthPercentage = Math.round(100 / childrenCount.length);
    const indicatorWidth =
      (segmentWidthPercentage / 100) * containerWidth + childrenCount.length / 2;

    const inputRange = Array.from({ length: childrenCount.length - 1 }, (_, i) => i * width);
    const translateX = scrollX.interpolate({
      inputRange,
      outputRange: inputRange.map(i => (i / width) * indicatorWidth)
    });

    return (
      <View
        style={[
          styles.lineIndicatorContainer,
          {
            width: containerWidth
          }
        ]}>
        <Animated.View
          style={[
            styles.lineIndicator,

            {
              width: indicatorWidth,
              backgroundColor: theme.colors.primary,
              transform: [{ translateX }]
            }
          ]}
        />
      </View>
    );
  };

  return (
    <View>
      <FlatList
        horizontal
        data={childrenCount as ReactElement[]}
        onScroll={indicator === IndicatorType.DOT ? onScrollDot : onScrollLine}
        bounces={false}
        decelerationRate={0}
        showsHorizontalScrollIndicator={false}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
        // keyExtractor={item => item.id.toString()}
        snapToAlignment="start"
        scrollEventThrottle={16}
        disableIntervalMomentum
        {...(pagingEnabled && { pagingEnabled: true, snapToInterval })}
      />
      {indicator === IndicatorType.DOT && renderDotIndicator()}
      {indicator === IndicatorType.LINE && renderLineIndicator()}
    </View>
  );
};

type ItemProps = PropsWithChildren & {
  width?: number;
};

const Item = ({ children, width }: ItemProps): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const dimensions = useDimensions('window');
  const safeWidth = dimensions.width - 20 - 20;

  return <View style={[styles.itemContainer, { width: width ?? safeWidth - 32 }]}>{children}</View>;
};

Carousel.Item = Item;

export default Carousel;

const Separator = (): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.separator} />;
};
