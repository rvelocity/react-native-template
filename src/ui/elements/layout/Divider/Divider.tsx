import { Theme } from '@/theme';
import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type DividerProps = {
  variant?: 'line' | 'dotted' | 'dashed';
  align?: 'horizontal' | 'vertical';
  style?: StyleProp<ViewStyle>;
};

const Divider: React.FC<DividerProps> = ({
  variant = 'line',
  align = 'horizontal',
  style,
  ...rest
}) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View
      style={[
        styles.container,
        styles[variant],
        align === 'vertical' ? styles.vertical : styles.horizontal,
        style
      ]}
      {...rest}
    />
  );
};

export default Divider;
