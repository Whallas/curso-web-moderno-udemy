// verificar na varipavel do node NODE_ENV se o ambiente selecionado é produção ou desenvolvimento
const modoDev = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    mode: modoDev ? 'development' : 'production',
    // módulo de entrada
    entry: './src/principal.js',
    output: {
        // nome do arquivo de saída. Padrão: main.js
        filename: 'principal.js',
        // nome da pasta de saída. Padrão: dist
        path: __dirname + '/public'
    },
    // servidor de desenvolvimento
    devServer: {
        contentBase: './public',
        port: 9000
    },
    optimization: {
        minimizer: [
            // diminui arquivos js
            new UglifyjsWebpackPlugin({
                // acelera com cache e execução paralela
                cache: true,
                parallel: true
            }),
            // diminui arquivos css
            new OptimizeCssAssetsWebpackPlugin({})
        ]
    },
    plugins: [
        // extrair css para arquivo específico
        new MiniCssExtractPlugin({
            filename: 'estilo.css'
        })
    ],
    module: {
        // em papéis implementam-se operações adicionais no webpack
        rules: [{
            // loader para css
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona css a DOM injetando a tag <style>
                'css-loader', // interpreta #import, url() ...
                'sass-loader'
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}