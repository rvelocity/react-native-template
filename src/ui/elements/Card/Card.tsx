import React, { type PropsWithChildren, type ReactElement } from 'react';
import { View, ViewStyle } from 'react-native';
import { useStyles } from 'react-native-unistyles';

import Text from '../Text';

import stylesheet from './styles';

type CardProps = PropsWithChildren & {
  variant?: 'contained' | 'outlined' | 'elevated' | 'transparent';
  style?: ViewStyle;
};

type CardTitleProps = {
  title: string;
};

export function CardTitle({ title }: CardTitleProps): ReactElement {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.titleContainer}>
      <Text>{title}</Text>
    </View>
  );
}

export function CardContent({ children }: PropsWithChildren): ReactElement {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.contentContainer}>{children}</View>;
}

export function CardActions({ children }: PropsWithChildren): ReactElement {
  const { styles } = useStyles(stylesheet);

  return <View style={styles.actionsContainer}>{children}</View>;
}

/* export const CardCover = (): void => {
  //
}; */

export function Card({ children, variant = 'transparent', style }: CardProps): ReactElement {
  const { styles } = useStyles(stylesheet);

  const cardStyles = [styles.cardBase, styles[variant], style];

  return <View style={cardStyles}>{children}</View>;
}

Card.Title = CardTitle;
Card.Content = CardContent;
/* Card.CardCover = CardCover; */
Card.Actions = CardActions;

export default Card;
