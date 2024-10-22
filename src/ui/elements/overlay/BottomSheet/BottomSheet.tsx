import React, { type FC, type ReactElement, type ReactNode, useEffect, useRef } from 'react';
import { Animated, Easing, View } from 'react-native';

import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';
import useDimensions from '@/hooks/useDimensions';
import IconButton from '../../media-icons/IconButton';
import Modal from '../Modal';

interface BottomSheetProps {
  isVisible: boolean;
  children: ReactNode;
  onClose: () => void;
}

export const BottomSheet: FC<BottomSheetProps> = ({
  isVisible = false,
  children,
  onClose
}): ReactElement => {
  const { height } = useDimensions('window');
  const { styles } = useStyles(stylesheet);
  const slideAnim = useRef(new Animated.Value(height)).current;

  const createAnimation = (
    animatedValue: Animated.Value,
    toValue: number,
    easingFunction: (value: number) => number
  ): Animated.CompositeAnimation => {
    return Animated.timing(animatedValue, {
      toValue,
      duration: 170,
      easing: easingFunction,
      useNativeDriver: true
    });
  };

  useEffect(() => {
    if (isVisible) {
      Animated.parallel([createAnimation(slideAnim, 0, Easing.out(Easing.ease))]).start();
    }

    return () => {
      slideAnim.stopAnimation();
    };
  }, [isVisible, slideAnim]);

  const handleClose = (): void => {
    Animated.parallel([createAnimation(slideAnim, height, Easing.in(Easing.ease))]).start(() => {
      onClose();
    });
  };

  return (
    <Modal visible={isVisible} transparent={true} animationType="fade" onRequestClose={handleClose}>
      <Animated.View style={[{ transform: [{ translateY: slideAnim }] }, styles.fullWidth]}>
        <View style={styles.container}>
          <View style={styles.closeButton}>
            <IconButton
              type="ant"
              icon="close"
              color="primary"
              variant="vector"
              iconStyle="contained"
              onPress={handleClose}
            />
          </View>
          <View style={styles.sheetContent}>{children}</View>
        </View>
      </Animated.View>
    </Modal>
  );
};

export default BottomSheet;
