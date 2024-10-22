import React, { type FC, type PropsWithChildren, type ReactElement, type ReactNode } from 'react';
import { TextInput as RNTextInput, View, type TextInputProps } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type TextFieldVariantType = 'default' | 'outlined' | 'underlined';
type TextFieldSizeType = 'md' | 'sm' | 'lg';

export interface TextFieldProps extends PropsWithChildren, TextInputProps {
  variant?: TextFieldVariantType;
  size?: TextFieldSizeType;
  left?: ReactNode;
  right?: ReactNode;
}

const TextField: FC<TextFieldProps> = ({
  variant = 'default',
  size = 'md',
  placeholder = 'Placeholder',
  left,
  right,
  ...rest
}): ReactElement => {
  const { styles, theme } = useStyles(stylesheet);

  return (
    <View style={[styles.default, styles[variant], styles[size]]}>
      {left && left}
      <RNTextInput
        {...rest}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.darkGray}
        style={styles.textInput}
      />
      {right && right}
    </View>
  );
};

export default TextField;
