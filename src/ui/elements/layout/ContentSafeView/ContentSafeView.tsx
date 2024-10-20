import useDimensions from '@/hooks/useDimensions';
import React, { PropsWithChildren } from 'react';
import { View } from 'react-native';
import { useStyles } from 'react-native-unistyles';

type ContentSafeViewProps = PropsWithChildren & {
  // Define props here
};

const ContentSafeView: React.FC<ContentSafeViewProps> = ({ children, ...rest }) => {
  const { theme } = useStyles();
  const { width } = useDimensions('window');

  return (
    <View
      style={{
        marginHorizontal: theme.spacing[20],
        width: width - theme.spacing[40]
      }}
      {...rest}>
      {children}
    </View>
  );
};

export default ContentSafeView;
