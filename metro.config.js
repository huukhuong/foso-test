const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const { withNativeWind } = require('nativewind/metro');
const {
  wrapWithReanimatedMetroConfig,
} = require('react-native-reanimated/metro-config');

const config = wrapWithReanimatedMetroConfig(
  mergeConfig(getDefaultConfig(__dirname), {}),
);

module.exports = withNativeWind(config, { input: './global.css' });
