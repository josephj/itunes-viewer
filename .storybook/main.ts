import * as path from 'path';

export default {
  stories: ['../components/**/stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: async (config: any) => {
    const fileLoaderRule = config.module.rules.find(
      (rule: any) => !Array.isArray(rule.test) && rule.test.test('.svg')
    );
    fileLoaderRule.exclude = /\.svg$/;
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack', 'url-loader'],
    });

    config.resolve = {
      extensions: ['.js', '.json'],
      alias: {
        react: path.join(__dirname, '../node_modules/react'),
      },
    };
    return config;
  },
};
