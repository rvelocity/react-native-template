import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Stack, Columns, Inline } from '@grapp/stacks';
import Text from '@/ui/elements/Text';
import Card from '@/ui/elements/Card';

const CategoriesStack = () => {
  return (
    <View>
      <Stack space={4}>
        <Columns space={2} alignY="top">
          <Card variant="outlined" />
          <Card variant="outlined" />
          <Card variant="outlined" />
        </Columns>
        <Inline space={2} style={styles.inlineRow}>
          <Card variant="outlined" style={styles.smallCard} />
          <Card variant="outlined" style={styles.largeCard} />
        </Inline>
      </Stack>
    </View>
  );
};

const styles = StyleSheet.create({
  inlineRow: {
    flexDirection: 'row', // Set the layout to row
    width: '100%'
  },
  smallCard: {
    width: '35%'
  },
  largeCard: {
    width: '60%'
  }
});

export default CategoriesStack;
