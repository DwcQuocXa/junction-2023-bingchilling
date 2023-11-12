const { getDefaultConfig } = require('expo/metro-config');

module.exports = (() => {
    // eslint-disable-next-line no-undef
    const config = getDefaultConfig(__dirname, {
        isCSSEnabled: true,
    });

    const { transformer, resolver } = config;

    config.transformer = {
        ...transformer,
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
    };
    config.resolver = {
        ...resolver,
        assetExts: resolver.assetExts.filter((ext) => ext !== 'svg'),
        sourceExts: [...resolver.sourceExts, 'svg'],
    };

    return config;
})();
