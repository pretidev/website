module.exports = {
  siteMetadata: {
    title: `Pretidev - Votre partenaire confiance pour des projets de qualité`,
    description: `Pretidev, spécialiste du web design, et du développement web vous accompagne dans vos projets sur-mesures de qualité : développement, graphisme, conseil, formation`,
    author: `@pretidev`,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Roboto:100,700,900`],
        display: "swap",
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
          omitKeys: [
            "xmlnsDc",
            "xmlnsCc",
            "xmlnsRdf",
            "xmlnsSvg",
            "xmlnsSodipodi",
            "xmlnsInkscape",
          ],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#F2FAFF`,
        theme_color: `#FF5F2E`,
        display: `minimal-ui`,
        icon: `src/images/icon/logo.png`,
      },
    },
  ],
}
