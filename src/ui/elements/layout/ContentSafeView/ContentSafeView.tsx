import useDimensions from '@/hooks/useDimensions';
import { Theme } from '@/theme';
import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

type ContentSafeViewProps = PropsWithChildren & {
  gap: keyof Theme['spacing'];
};

const ContentSafeView: React.FC<ContentSafeViewProps> = ({ children, gap, ...rest }) => {
  const { theme } = useStyles();
  const { width } = useDimensions('window');

  const safeWidth = width - theme.spacing[28];

  return (
    <View
      style={{
        marginHorizontal: theme.spacing[14],
        width: safeWidth,
        gap: gap
      }}
      {...rest}>
      {children}
    </View>
  );
};

export default ContentSafeView;
