import React, { FC } from 'react';
import { useStyles } from 'react-native-unistyles';

import useHeader from '@/hooks/useHeader';
import { CourierStackProps } from '@/types/navigation';
import List from '@/ui/elements/data-display/List';
import Button from '@/ui/elements/forms/Button';
import Divider from '@/ui/elements/layout/Divider';
import Header from '@/ui/elements/layout/Header';
import Screen from '@/ui/elements/layout/Screen/Screen.tsx';

import ContentSafeView from '../../../ui/elements/layout/ContentSafeView';

import stylesheet from './styles';

type CourierProps = CourierStackProps<'Courier'>;

const CourierCartHeader: React.FC = () => (
  <Header variant="large">
    <Header.BackAction />
    <Header.Content title="Cart" />
  </Header>
);

const Courier: FC<CourierProps> = ({ navigation }) => {
  const { styles } = useStyles(stylesheet);
  useHeader(CourierCartHeader);
  const { navigate } = navigation;

  const navigateToCourierCart = () => {
    navigate('CourierCart');
  };

  return (
    <Screen preset="scroll" background="white" contentContainerStyle={styles.screenContent}>
      <ContentSafeView>
        <List>
          <List.SubHeader title="Note:" />
          <List.Item
            description="No illegal or hazardous items"
            left={() => (
              <List.Icon variant="vector" icon="dot-single" type="entypo" color="gray" size={20} />
            )}
          />
          <List.Item
            description="High Value & Fragile Items not recommended"
            left={() => (
              <List.Icon variant="vector" icon="dot-single" type="entypo" color="gray" size={20} />
            )}
          />
          <List.Item
            description="Select type of parcel"
            left={() => (
              <List.Icon variant="vector" icon="dot-single" type="entypo" color="gray" size={20} />
            )}
          />
        </List>
        <Divider />
        <Button variant="primary" type="contained" onPress={navigateToCourierCart}>
          <Button.Text title="Make Payment" />
        </Button>
      </ContentSafeView>
    </Screen>
  );
};

export default Courier;
