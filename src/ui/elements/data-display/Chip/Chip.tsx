import React, { type FC, type PropsWithChildren, ReactElement } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Clickable from '../../Clickable';
import Text from '../../Text';

import stylesheet from './styles';

interface ChipProps extends PropsWithChildren {
  left?: () => ReactElement;
  right?: () => ReactElement;
  variant?: 'outlined' | 'contained';
  onPress: () => void;
}

const Chip: FC<ChipProps> = ({ children, left, right, onPress, variant = 'outlined' }) => {
  const { styles } = useStyles(stylesheet);
  const chipStyles = [styles.base, styles[variant]];

  return (
    <Clickable onPress={onPress}>
      <View style={chipStyles}>
        {left && left()}
        <Text variant="labelLarge" color="darkGray">
          {children}
        </Text>
        {right && right()}
      </View>
    </Clickable>
  );
};

export default Chip;
