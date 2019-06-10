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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-127425220-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: [],
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'makikupla.life',
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-netlify',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
        ignore: [`**/.*`], // ignore files starting with a dot
      },
    },
  ],
};
