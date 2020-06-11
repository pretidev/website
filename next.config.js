module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|tsjsx|tsx)x?$/,
      },
      use: ["@svgr/webpack"],
    })

    config.module.rules.push({
      test: /\.svg\?file$/,
      use: ["url-loader"],
    })

    return config
  },

  devIndicators: {
    autoPrerender: false,
  },
}
