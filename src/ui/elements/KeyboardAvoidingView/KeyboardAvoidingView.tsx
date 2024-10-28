import React, { type FC, type PropsWithChildren, type ReactElement } from 'react';
import {
  type KeyboardAvoidingViewProps as RNKeyboardAvoidingViewProps,
  KeyboardAvoidingView as RNKeyboardAvoidingView
} from 'react-native';

import { detectDevice } from '@/utils';

import styles from './styles';

type KeyboardAvoidingViewProps = PropsWithChildren & {
  keyboardOffset?: number;
  KeyboardAvoidingViewProps?: RNKeyboardAvoidingViewProps;
};

export const KeyboardAvoidingView: FC<KeyboardAvoidingViewProps> = ({
  children,
  keyboardOffset = 0,
  KeyboardAvoidingViewProps
}): ReactElement => {
  return (
    <RNKeyboardAvoidingView
      behavior={detectDevice.isIOS ? 'padding' : 'height'}
      keyboardVerticalOffset={keyboardOffset}
      {...KeyboardAvoidingViewProps}
      style={[styles.keyboardAvoidingViewStyle, KeyboardAvoidingViewProps?.style]}>
      {children}
    </RNKeyboardAvoidingView>
  );
};

export default KeyboardAvoidingView;
