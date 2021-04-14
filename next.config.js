const { parsed: localEnv1 } = require('dotenv').config({});
const { parsed: localEnv2 } = require('dotenv').config({
  path: `.env.${process.env.ENVIRONEMENT}`,
});
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack');
const withPWA = require('next-pwa');
const runtimeCaching = require('next-pwa/cache');

module.exports = withPWA({
  target: 'serverless',
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    path: '/_next/image',
    loader: 'default',
  },
  pwa: {
    dest: 'public',
    runtimeCaching,
    register: true,
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.EnvironmentPlugin({ ...localEnv1, ...localEnv2 }),
    );
    return config;
  },
});
