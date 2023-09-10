import path from 'node:path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const appSourceDir = path.join(__dirname, '..', 'src');

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/preset-scss',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-mdx-gfm',
    '@storybook/addon-actions',
  ],
  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
  webpackFinal: (config: any) => {
    // Disable the Storybook internal-`.svg`-rule for components loaded from our app.
    const svgRule = config.module.rules.find((rule) => 'test.svg'.match(rule.test));
    svgRule.exclude = [appSourceDir];

    config.module.rules.push({
      test: /\.svg$/i,
      include: [appSourceDir],
      use: ['@svgr/webpack'],
    });

    return config;
  },
};
export default config;
