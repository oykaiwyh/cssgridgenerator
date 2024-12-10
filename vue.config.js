
const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './docs'),
  publicPath: '/cssgridgenerator',
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  },
};
