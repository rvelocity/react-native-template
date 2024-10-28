import { useSafeAreaInsetsStyle } from '@/hooks/useSafeAreaInsetsStyle';
import { useNavigation } from '@react-navigation/native';
import React, { type PropsWithChildren, type ReactElement, Children, isValidElement } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import IconButton from '../../media-icons/IconButton';
import { IconButtonProps } from '../../media-icons/IconButton/IconButton';
import stylesheet from './styles';
import Text from '../../Text';
import ContentSafeView from '../ContentSafeView';

// Set displayName for Header.Action to identify it
const Action = (props: { icon: string; onPress?: () => void } & IconButtonProps): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.actionWrapper}>
      <IconButton size={24} {...props} />
    </View>
  );
};
Action.displayName = 'HeaderAction';

export const Header = ({ children }: PropsWithChildren): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const containerInsets = useSafeAreaInsetsStyle(['top'], 'margin');

  // Separate Header.Action components from other children
  const actionElements = Children.toArray(children).filter(
    child => isValidElement(child) && (child.type as any).displayName === 'HeaderAction'
  );
  const otherElements = Children.toArray(children).filter(
    child => !(isValidElement(child) && (child.type as any).displayName === 'HeaderAction')
  );

  return (
    <View style={[styles.headerContainer, containerInsets]}>
      <ContentSafeView>
        <View style={styles.headerContent}>
          <View style={styles.otherContent}>{otherElements}</View>
          <View style={styles.actionGroup}>{actionElements}</View>
        </View>
      </ContentSafeView>
    </View>
  );
};

const BackAction = ({ onPress }: { onPress?: () => void }): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const navigation = useNavigation();

  const navigateBack = (): void => {
    navigation.goBack();
  };

  return (
    <View style={styles.backWrapper}>
      <IconButton
        size={24}
        padding={0}
        variant="vector"
        type="ant"
        icon="arrowleft"
        onPress={onPress ?? navigateBack}
      />
    </View>
  );
};
BackAction.displayName = 'HeaderBackAction';

type ContentProps = {
  title: string;
  subTitle?: string;
};

const Content = ({ title, subTitle }: ContentProps): ReactElement => {
  return (
    <View>
      <Text variant="titleMedium">{title}</Text>
      {subTitle && (
        <Text variant="bodySmall" color="darkGray">
          {subTitle}
        </Text>
      )}
    </View>
  );
};
Content.displayName = 'HeaderContent';

// Attach displayName to each component for filtering
Header.BackAction = BackAction;
Header.Content = Content;
Header.Action = Action;

export default Header;
