module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        blocklist: null,
        allowlist: null,
        verbose: false,
        blacklist: null,
        whitelist: null,
        safe: false,
        allowUndefined: true
      }
    ],
    'react-native-reanimated/plugin'
  ]
};
