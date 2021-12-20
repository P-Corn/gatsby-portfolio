require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-anchor-links`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        spaceId: 'wdk31r0j42hp',
        accessToken: 'eyIKtvcM1MM4a3co34ReIqrAQjAgz61Q_-jk_unK00s',
      }
    }
  ],
}
