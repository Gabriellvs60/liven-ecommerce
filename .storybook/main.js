const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const path = require('path');
const fs = require("fs");

let reactScripts = path.resolve("./node_modules/react-scripts");
if (!fs.existsSync(reactScripts)) {
  reactScripts = path.resolve("../node_modules/react-scripts");
}

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    {
      name: '@storybook/preset-create-react-app',
      options: {
        scriptsPackageName: reactScripts,
      }
    },
  ],
  webpackFinal(config, { configType }) {
    return {
      ...config,
      resolve: {
        plugins: [
          ...config.resolve.plugins,
          new TsconfigPathsPlugin({
            configFile: path.resolve(__dirname, '../tsconfig.json')
          }),
        ],
        extensions: [
          ...config.resolve.extensions,
          '.tsx',
          '.ts',
        ],
      },
    };
  },
  "framework": "@storybook/react",
  "core": {
    "builder": "webpack5"
  },
}