import React, { FC, PropsWithChildren, ReactElement } from 'react';
import { View } from 'react-native';
import Image, { ImageProps } from '../Image/Image';
import { useStyles } from 'react-native-unistyles';
import stylesheet from './styles';

type ImageBannerProps = {
  variant?: 'xs' | 'sm' | 'md' | 'lg';
} & PropsWithChildren &
  ImageProps;

export const ImageBanner: FC<ImageBannerProps> = ({ variant = 'md', ...rest }): ReactElement => {
  const { styles } = useStyles(stylesheet);
  const variantStyles = styles[variant];

  return (
    <View style={[styles.container, variantStyles]}>
      <Image style={styles.imageBanner} {...rest} />
    </View>
  );
};

export default ImageBanner;
