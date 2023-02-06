import type { GatsbyConfig } from 'gatsby';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'Stackless',
    siteUrl: 'https://stackless.tech',
  },
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-tsconfig-paths',
    'gatsby-plugin-sass',
  ],
};

export default config;
