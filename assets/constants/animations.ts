export const mobileConnecting = require('../animations/mobile-connecting.json');

export const animations = {
  mobileConnecting
};

export type Animation = keyof typeof animations;

export const getAnimation = (animationKey: Animation): string => {
  return animations[animationKey];
};
