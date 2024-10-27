import React, { type FC, type PropsWithChildren, type ReactElement } from 'react';
import { Pressable, type PressableProps, StyleProp, ViewStyle } from 'react-native';

type ClickableProps = PropsWithChildren &
  PressableProps & {
    feedback?: boolean;
    style?: StyleProp<ViewStyle> | ((state: { pressed: boolean }) => StyleProp<ViewStyle>);
  };

const Clickable: FC<ClickableProps> = ({
  children,
  feedback = false,
  style,
  ...rest
}): ReactElement => {
  return (
    <Pressable
      {...rest}
      android_ripple={feedback ? { color: 'rgba(0, 0, 0, 0.1)' } : undefined}
      style={({ pressed }) => [
        typeof style === 'function' ? style({ pressed }) : style,
        feedback && pressed && { opacity: 0.85 }
      ]}>
      {children}
    </Pressable>
  );
};

export default Clickable;
