import { Theme } from '@/theme';
import { type Icon as IconType } from '@assets/constants/icons';
import React, { type FC, type PropsWithChildren, type ReactElement, type ReactNode } from 'react';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';
import IconButton from '../../media-icons/IconButton';

type InputVariantType = 'default' | 'outlined' | 'underlined';
type InputSizeType = 'md' | 'sm' | 'lg';

type InputProps = {
  variant: InputVariantType;
  size: InputSizeType;
  color?: keyof Theme['colors'];
  startIcon?: IconType;
  endIcon?: IconType;
} & PropsWithChildren &
  TextInputProps & {
    left?: () => ReactNode;
    right?: () => ReactNode;
  };

const TextField: FC<InputProps> = ({
  startIcon,
  endIcon,
  variant = 'default',
  size = 'md',
  placeholder = 'Placeholder',
  color = 'text',
  ...rest
}): ReactElement => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.default, styles[variant], styles[size]]}>
      {startIcon ? (
        <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
      ) : null}
      <RNTextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor={theme.colors[color]}
        style={{ flex: 1 }}
      />
      {endIcon ? (
        <IconButton variant="svg" icon="menu" color="primary" iconStyle="contained" size={7} />
      ) : null}
    </View>
  );
};

export default TextField;
