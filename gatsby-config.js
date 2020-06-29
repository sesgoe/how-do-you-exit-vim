const tailwindConfig = require("./tailwind.config.js");

module.exports = {
  siteMetadata: {
    title: `How do you exit vim?`,
    description: `A silly site that shows you how to exit vim`,
    author: `@sesgoe`,
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `How do I exit vim?`,
        short_name: `How do I exit vim?`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `src/images/vim_icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(tailwindConfig),
          require(`autoprefixer`),
          ...(process.env.NODE_ENV === `production`
            ? [require(`cssnano`)]
            : []),
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-twitter`
  ],
};
