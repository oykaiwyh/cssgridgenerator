
const path = require('path')

module.exports = {
  outputDir: path.resolve(__dirname, './root'),
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/main.scss";`
      }
    }
  },
};
