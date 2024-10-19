import React, {
  createContext,
  PropsWithChildren,
  ReactElement,
  useContext,
  useMemo,
  useState,
} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {useStyles} from 'react-native-unistyles';
import Icon from '../../media-icons/Icon';
import Text from '../../Text';
import stylesheet from './styles';

// Accordion Context
interface AccordionContextType {
  isExpanded: boolean;
  toggle: () => void;
}

const AccordionContext = createContext<AccordionContextType>({
  isExpanded: false,
  toggle: () => {},
});

const {Provider} = AccordionContext;

type AccordionProps = PropsWithChildren;

const Accordion = ({children}: AccordionProps): ReactElement => {
  const {styles} = useStyles(stylesheet);
  return <View style={styles.container}>{children}</View>;
};

type ItemProps = PropsWithChildren;

const Item = ({children}: ItemProps): ReactElement => {
  const [isExpanded, setExpanded] = useState(false);
  const {styles} = useStyles(stylesheet);

  const toggle = (): void => {
    setExpanded(prev => !prev);
  };

  const contextValue = useMemo(
    () => ({
      isExpanded,
      toggle,
    }),
    [isExpanded],
  );

  return (
    <Provider value={contextValue}>
      <View style={styles.item}>{children}</View>
    </Provider>
  );
};

// If in future we needed isExpanded state, we will use Trigger component (render props pattern)
/* type TriggerProps = {
  children: (props: {isExpanded: boolean}) => ReactNode;
};

const Trigger = ({children}: TriggerProps): ReactElement => {
  const {styles} = useStyles(stylesheet);
  const {isExpanded, toggle} = useContext(AccordionContext);

  return (
    <TouchableOpacity onPress={toggle} style={styles.trigger}>
      {children({isExpanded})}
    </TouchableOpacity>
  );
}; */

type HeaderProps = PropsWithChildren;

const Header = ({children}: HeaderProps): ReactElement => {
  const {styles} = useStyles(stylesheet);

  const {isExpanded, toggle} = useContext(AccordionContext);

  return (
    <TouchableOpacity onPress={toggle} style={styles.trigger}>
      <View style={styles.header}>
        <Text variant="titleSmall">{children}</Text>
        {isExpanded ? (
          <Icon variant="vector" type="fontisto" size={14} icon="angle-up" />
        ) : (
          <Icon variant="vector" type="fontisto" size={14} icon="angle-down" />
        )}
      </View>
    </TouchableOpacity>
  );
};

type ContentProps = PropsWithChildren;

const Content = ({children}: ContentProps): ReactElement | null => {
  const {styles} = useStyles(stylesheet);
  const {isExpanded} = useContext(AccordionContext);

  return isExpanded ? (
    <View style={styles.content}>
      <Text variant="bodyMedium">{children}</Text>
    </View>
  ) : null;
};

Accordion.Item = Item;
// Accordion.Trigger = Trigger;
Accordion.Header = Header;
Accordion.Content = Content;

export {Accordion};
