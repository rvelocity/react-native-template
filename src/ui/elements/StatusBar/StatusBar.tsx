import React from 'react';
import { type StatusBarProps as RNStatusBarProps, StatusBar as RNStatusBar } from 'react-native';

import { Theme } from '@/theme';

interface StatusBarProps extends Omit<RNStatusBarProps, 'backgroundColor'> {
  backgroundColor?: keyof Theme['colors'];
}

const StatusBar: React.FC<StatusBarProps> = props => {
  return <RNStatusBar {...props} />;
};

export default StatusBar;
