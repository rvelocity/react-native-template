import React from 'react';
import { View } from 'react-native';
import { Stack, Columns, Inline } from '@grapp/stacks';
import stylesheet from './styles';
import Card from '@/ui/elements/Card';
import { useStyles } from 'react-native-unistyles';

const CategoriesStack = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View>
      <Stack space={4}>
        <Columns space={2} alignY="top">
          <Card variant="outlined" style={styles.cardHeight} />
          <Card variant="outlined" style={styles.cardHeight} />
          <Card variant="outlined" style={styles.cardHeight} />
        </Columns>
        <Inline space={2} style={styles.inlineRow}>
          <Card variant="outlined" style={styles.smallCard} />
          <Card variant="outlined" style={styles.largeCard} />
        </Inline>
      </Stack>
    </View>
  );
};

export default CategoriesStack;
