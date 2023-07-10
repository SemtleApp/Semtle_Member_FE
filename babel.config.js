module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@': './src',
          '@apis': './src/apis',
          '@components': './src/components',
          '@constants': './src/constants',
          '@feature': './src/feature',
          '@hooks': './src/hooks',
          '@screens': './src/screens',
          '@services': './src/services',
          '@types': './src/types',
        },
      },
    ],
  ],
};
