const { defineConfig } = require('@vue/cli-service')
const webpack = require('webpack')
const fs = require('fs')
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

module.exports = defineConfig({
  lintOnSave: false,
  transpileDependencies: ['@vue/reactivity'],
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env.PACKAGE_VERSION': '"' + version + '"'
      }),
      new NodePolyfillPlugin()
    ]
  }
})

