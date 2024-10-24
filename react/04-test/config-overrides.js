// config-overrides.js
module.exports = function override(config, env) {
  config.resolve.fallback = {
    zlib: require.resolve("browserify-zlib"),
  };
  return config;
};
