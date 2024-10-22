import React, { type FC, type ReactElement } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import Clickable from '../../Clickable';
import Icon, { type IconProps } from '../Icon';
import stylesheet from './styles';

export interface IconButtonProps extends IconProps {
  onPress?: () => void;
  disabled?: boolean;
  iconStyle?: 'default' | 'outlined' | 'contained';
  padding?: number;
}

const IconButton: FC<IconButtonProps> = ({
  icon,
  onPress = null,
  variant = 'image',
  size = 24,
  color = 'primary',
  iconStyle = 'default',
  disabled = false,
  padding,
  ...rest
}): ReactElement => {
  const { styles, theme } = useStyles(stylesheet);

  const render = (): ReactElement => {
    const containerStyles = [
      styles.container,
      {
        padding: padding || 10,
        borderRadius: size,
        opacity: disabled ? 0.3 : 1,
        ...(iconStyle === 'contained' && { backgroundColor: theme.colors.secondary }),
        ...(iconStyle === 'outlined' && { borderColor: theme.colors[color], borderWidth: 1 })
      }
    ];

    return (
      <View style={containerStyles}>
        <Icon icon={icon} variant={variant} size={size} color={color} {...rest} />
      </View>
    );
  };

  if (onPress !== null) {
    return (
      <Clickable onPress={onPress} disabled={disabled}>
        {render()}
      </Clickable>
    );
  }

  return render();
};

export default IconButton;
