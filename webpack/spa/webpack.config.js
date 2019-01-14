const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

const modoDev = process.env.NODE_ENV !== 'production'

module.exports = {
    mode: modoDev ? 'development' : 'production',
    entry: './index.js',
    output: {
        filename: './assets/js/app.min.js',
        path: path.resolve(__dirname, 'public')
    },
    devServer: {
        contentBase: './public',
        port: 9001
    },
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                'css-loader',
                'sass-loader'
            ]
        }, {
            test: /\.html$/,
            use: [
                {
                    loader: 'file-loader',
                    options: {
                        name (file) {
                            const filename = path.parse(file).name
                            return `${filename !== 'index' ? 'paginas/' : ''}[name].html`
                        }
                    }
                },
                'extract-loader',
                {
                    loader: 'html-loader',
                    options: {
                        root: '.',
                        minimize: false,
                        removeComments: true,
                        collapseWhitespace: true,
                        conservativeCollapse: false
                    }
                }
            ]   
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader?name=assets/imgs/[name].[ext]']
        }]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './assets/css/app.min.css',
        })
    ],
    optimization: {
        minimizer: [
            new UgifyjsWebpackPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCssAssetsWebpackPlugin({})
        ]
    }
}