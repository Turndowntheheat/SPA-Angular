const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({

  name: 'mfe1',

  exposes: {
    './Component': './src/app/app.ts',
    './Mfe1Component': './src/app/mfe1-component/mfe1-component.component.ts',
    './RemoteEntry': './src/app/remote-entry/remote-entry.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

module.exports = {
  ...mfConfig,
  output: {
    ...mfConfig.output,
    scriptType: 'module'
  },
};