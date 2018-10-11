module.exports = {
  siteMetadata: {
    title: 'Mäkikuplaan?',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Mäkikupla Life',
        short_name: 'Mäkikupla',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'minimal-ui',
        icon: 'src/images/pizza.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
}
