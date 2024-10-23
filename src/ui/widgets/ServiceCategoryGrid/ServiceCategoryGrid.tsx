import Card from '@/ui/elements/Card';
import Grid from '@/ui/elements/layout/Grid';
import Text from '@/ui/elements/Text';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles.ts';

const serviceCategory = [
  {
    title: 'Food',
    subtitle: 'Delicious food, delivered.'
  },
  {
    title: 'Mart',
    subtitle: 'Quick grocery delivery.'
  },
  {
    title: 'Dine In',
    subtitle: 'Reserve a table nearby.'
  },
  {
    title: 'Courier',
    subtitle: 'Fast and easy delivery.'
  }
];

const gold = {
  title: 'Gold Membership',
  subtitle: 'Exclusive perks await.'
};

type ServiceCategoryGridProps = {
  // Define props here
};

const ServiceCategoryGrid: React.FC<ServiceCategoryGridProps> = props => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.container}>
      <Grid crossAxisCount={2} mainAxisSpacing={24} crossAxisSpacing={20}>
        {serviceCategory.slice(0, 4).map(service => {
          return (
            <Card key={service.title} variant="contained">
              <Card.Content>
                <Text variant="titleExtraLarge">{service.title}</Text>
                <Text variant="titleSmall">{service.subtitle}</Text>
              </Card.Content>
            </Card>
          );
        })}
      </Grid>
      <Card variant="contained">
        <Card.Content>
          <Text variant="titleExtraLarge">{gold.title}</Text>
          <Text variant="titleSmall">{gold.subtitle}</Text>
        </Card.Content>
      </Card>
    </View>
  );
};

export default ServiceCategoryGrid;
