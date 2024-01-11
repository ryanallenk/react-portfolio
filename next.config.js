/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

require('dotenv').config({
  path: path.resolve(process.cwd(), `.env.${process.env.CI_ENV || process.env.NODE_ENV}`)
});

/** @type {import('next').NextConfig} */
const nextJSConfig = {
  trailingSlash: true,
  compress: true, // NOTE: enable this when doing SSR
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')]
  },
  staticPageGenerationTimeout: 120,
  images: {
    disableStaticImages: true,
    domains: [
      'a.storyblok.com',
      'logo.clearbit.com',
      'www.10kreader.com',
      'sec.gov',
      'cdn.snapi.dev',
      'firebasestorage.googleapis.com'
    ]
  },
  webpack: function (config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack'
        }
      ]
    });

    return config;
  }
};

module.exports = nextJSConfig;
