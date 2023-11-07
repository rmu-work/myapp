const path = require('path')
const fs = require('fs')
const webpack = require('webpack')
const { defineConfig } = require('@vue/cli-service')
const { mergeSassVariables } = require('@vuetify/cli-plugin-utils')
const packageJson = fs.readFileSync('./package.json')
const version = JSON.parse(packageJson).version || 0

module.exports = {
    publicPath: '/',
    transpileDependencies: ['vuetify', /[\\/]node_modules[\\/]tiptap.*/],

    devServer: {
        // disableHostCheck: true,
        proxy: 'http://localhost:8000',
    },

    configureWebpack: {
        resolve: {
            alias: {
                '@themeConfig': path.resolve(__dirname, 'themeConfig.js'),
                // '@core': path.resolve(__dirname, 'src/@core'),
                '@axios': path.resolve(__dirname, 'src/plugins/axios.js'),
                // '@user-variables': path.resolve(__dirname, 'src/styles/variables.scss'),
                // apexcharts: path.resolve(__dirname, 'node_modules/apexcharts-clevision'),
            },
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    PACKAGE_VERSION: '"' + version + '"',
                },
            }),
        ],
    },

    // chainWebpack: config => {
    //     const modules = ['vue-modules', 'vue', 'normal-modules', 'normal']
    //     modules.forEach(match => {
    //         config.module
    //             .rule('sass')
    //             .oneOf(match)
    //             .use('sass-loader')
    //             .tap(opt => mergeSassVariables(opt, "'@/styles/variables.scss'"))
    //         config.module
    //             .rule('scss')
    //             .oneOf(match)
    //             .use('sass-loader')
    //             .tap(opt => mergeSassVariables(opt, "'@/styles/variables.scss';"))
    //     })
    // },
    // transpileDependencies: true
}
