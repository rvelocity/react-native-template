/* eslint-disable react/no-unstable-nested-components */
import useHeader from '@/hooks/useHeader';
import mockData from '@/mockData';
import { DineInStackProps } from '@/types/navigation';
import ImageSlider from '@/ui/components/ImageSlider';
import List from '@/ui/elements/data-display/List';
import Button from '@/ui/elements/forms/Button';
import ContentSafeView from '@/ui/elements/layout/ContentSafeView/ContentSafeView.tsx';
import Divider from '@/ui/elements/layout/Divider';
import Header from '@/ui/elements/layout/Header';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';
import Icon from '@/ui/elements/media-icons/Icon';
import Image from '@/ui/elements/media-icons/Image';
import Text from '@/ui/elements/Text';
import React from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

interface DineInRestaurantProps extends DineInStackProps<'DineInRestaurant'> {}

const ShopHeader = () => (
  <Header>
    <Header.BackAction />
    <Header.Action icon="hearto" variant="vector" type="ant" />
    <Header.Action icon="search1" variant="vector" type="ant" />
  </Header>
);

const DineInRestaurant: React.FC<DineInRestaurantProps> = () => {
  useHeader(ShopHeader);
  const { styles } = useStyles(stylesheet);

  return (
    <Screen
      preset="auto"
      background="white"
      contentContainerStyle={styles.screenContent}
      barBackground="white">
      <RestaurantImage />
      <ContentSafeView>
        <RestaurantInfo />
        <Divider />
      </ContentSafeView>

      <ImageSlider title="Restaurants Photos" data={mockData.restaurantPhoto} />
      <ContentSafeView>
        <Divider />
        <List>
          <List.SubHeader title="Location" />
          <List.Item
            description="No.1, Gold Avenue, HAL Old Airport Rd, Adjoining KGA Gold Course, Damlur, Bengaluru"
            left={() => (
              <List.Icon
                variant="vector"
                icon="location"
                type="octicon"
                color="primary"
                size={20}
              />
            )}
          />
          <List.Item
            description="11:00 AM - 11:00 PM"
            left={() => (
              <List.Icon
                variant="vector"
                icon="clockcircleo"
                type="ant"
                color="primary"
                size={20}
              />
            )}
          />
        </List>
        <Divider />
      </ContentSafeView>
      <ImageSlider title="Menu" data={mockData.menu} />
      <ContentSafeView>
        <Divider />
        <View>
          <Text variant="bodyEmphasized">Feature</Text>
        </View>
        <Divider />
        <View style={{ gap: 8 }}>
          <Button variant="primary" type="contained">
            <Button.Text title="Book a table" />
          </Button>
          <Button variant="secondary" type="contained">
            <Button.Text title="Pay bill" />
          </Button>
        </View>
      </ContentSafeView>
    </Screen>
  );
};

const RestaurantImage = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <Image
      style={styles.restaurantImage}
      remote
      image="https://b.zmtcdn.com/data/pictures/8/20117738/30b869fb1fe92dd995b203b5fd58d22e.jpg"
    />
  );
};

const RestaurantInfo = () => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.infoContainer}>
      <Text variant="titleExtraLarge">Limelight - Royal Orchid Hotel</Text>
      <View style={styles.detailsContainer}>
        <View style={styles.cuisineContainer}>
          <Text variant="labelLarge" numberOfLines={1}>
            Continental | Indian | Chinese
          </Text>
          <Text variant="bodySmall" numberOfLines={1} color="darkGray">
            Indranagar | 2km
          </Text>
        </View>
        <View style={styles.ratingContainer}>
          <View style={styles.ratingRow}>
            <Icon variant="vector" type="entypo" icon="star" size={16} color="warning" />
            <Text variant="bodySmall">4.3 (3k Ratings)</Text>
          </View>
          <Text variant="bodySmall">₹ 2500 for Two</Text>
        </View>
      </View>
    </View>
  );
};

export default DineInRestaurant;
