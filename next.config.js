module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            issuer: {
              test: /\.(js|tsjsx|tsx)x?$/,
            },
          },
        },
        {
          loader: "file-loader",
          options: {
            outputPath: "static",
          },
        },
      ],
    })

    return config
  },
  devIndicators: {
    autoPrerender: false,
  },
}
