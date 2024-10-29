import React, {
  type PropsWithChildren,
  type ReactElement,
  Children,
  createContext,
  isValidElement,
  useContext,
  useMemo
} from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { useNavigation } from '@react-navigation/native';

import { useSafeAreaInsetsStyle } from '@/hooks/useSafeAreaInsetsStyle';

import IconButton from '../../media-icons/IconButton';
import { IconButtonProps } from '../../media-icons/IconButton/IconButton';
import Text from '../../Text';
import ContentSafeView from '../ContentSafeView';

import stylesheet from './styles';

type HeaderContextType = {
  variant: 'default' | 'large';
};

const HeaderContext = createContext<HeaderContextType>({ variant: 'default' });

const useHeaderContext = () => useContext(HeaderContext);

export function Header({
  children,
  variant
}: PropsWithChildren & { variant: 'default' | 'large' }): ReactElement {
  const { styles } = useStyles(stylesheet);
  const containerInsets = useSafeAreaInsetsStyle(['top'], 'margin');

  const contextValue = useMemo(() => ({ variant }), [variant]);

  const actionElements = Children.toArray(children).filter(
    child => isValidElement(child) && (child.type as any).displayName === 'HeaderAction'
  );
  const contentElements = Children.toArray(children).filter(
    child => isValidElement(child) && (child.type as any).displayName === 'HeaderContent'
  );
  const backElement = Children.toArray(children).filter(
    child => isValidElement(child) && (child.type as any).displayName === 'HeaderBackAction'
  );

  return (
    <HeaderContext.Provider value={contextValue}>
      <View style={[styles.headerContainer, containerInsets]}>
        <ContentSafeView gap={16}>
          {backElement.length !== 0 || actionElements.length !== 0 ? (
            <View style={styles.headerContent}>
              <View style={styles.backAndContent}>
                {backElement}
                {variant === 'default' && contentElements}
              </View>
              <View style={styles.actionGroup}>{actionElements}</View>
            </View>
          ) : null}
          {variant === 'large' && <View>{contentElements}</View>}
        </ContentSafeView>
      </View>
    </HeaderContext.Provider>
  );
}

function BackAction({ onPress }: { onPress?: () => void }): ReactElement {
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
}
BackAction.displayName = 'HeaderBackAction';

function Content({ title, subTitle }: { title: string; subTitle?: string }): ReactElement {
  const { variant } = useHeaderContext();

  const titleVariant = variant === 'large' ? 'titleExtraLarge' : 'titleMedium';

  return (
    <View>
      <Text variant={titleVariant}>{title}</Text>
      {subTitle && (
        <Text variant="bodySmall" color="darkGray">
          {subTitle}
        </Text>
      )}
    </View>
  );
}
Content.displayName = 'HeaderContent';

function Action(props: { icon: string; onPress?: () => void } & IconButtonProps): ReactElement {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.actionWrapper}>
      <IconButton size={24} {...props} />
    </View>
  );
}
Action.displayName = 'HeaderAction';

Header.BackAction = BackAction;
Header.Content = Content;
Header.Action = Action;

export default Header;
