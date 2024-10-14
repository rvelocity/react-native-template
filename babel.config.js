module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@': './src',
          '@assets': './assets',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
