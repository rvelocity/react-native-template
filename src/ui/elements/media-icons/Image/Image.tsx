import React, { type FC, type ReactElement } from 'react';
import {
  type ImageProps as RNImageProps,
  type ImageSourcePropType,
  Image as RNImage
} from 'react-native';
import { useStyles } from 'react-native-unistyles';
import { type Image as ImageType, getImage } from '@assets/constants/images';

import { IconProps } from '../Icon/Icon';

import stylesheet from './styles';

export type ImageProps = Omit<RNImageProps, 'source'> &
  Omit<IconProps, 'variant' | 'icon'> & {
    image: ImageType | string;
    remote?: boolean;
  };

export const Image: FC<ImageProps> = ({ image, remote = false, ...rest }): ReactElement => {
  const { styles } = useStyles(stylesheet);

  return (
    <RNImage
      source={remote ? { uri: image } : (getImage(image as ImageType) as ImageSourcePropType)}
      resizeMode="cover"
      style={styles.image}
      {...rest}
    />
  );
};

export default Image;
