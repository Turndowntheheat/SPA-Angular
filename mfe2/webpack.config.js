const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

const mfConfig = withModuleFederationPlugin({

  name: 'mfe2',

  exposes: {
    './Component': './src/app/app.ts',
    './Mfe2Component': './src/app/mfe2-component/mfe2-component.component.ts',
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
