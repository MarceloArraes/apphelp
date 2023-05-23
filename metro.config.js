const { getDefaultConfig } = require("expo/metro-config");

module.exports = (async () => {
  const { resolver: { sourceExts } } = await getDefaultConfig(__dirname);
  return {
    transformer: {
      babelTransformerPath: require.resolve("react-native-svg-transformer"),
    },
    resolver: {
      sourceExts: [...sourceExts, "svg"],
    },
  };
})();
