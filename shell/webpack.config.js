const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({

  name: 'shell',

  exposes: {
    './Component': './src/app/app.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

module.exports = {
  ...mfConfig,
  output: {
    ...mfConfig.output,
    scriptType: 'text/javascript'
  },
};
