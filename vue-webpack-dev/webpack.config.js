const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueLoaderLibPlugin = require('vue-loader/lib/plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname + '/dist',
        filename: 'js/dist.js'
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: ['style-loader', 'css-loader', 'postcss-loader'],
                exclude: /node_modules/,
                include: /src/
            },
            {
                test: /\.(sass|scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader'],
                exclude: /node_modules/,
                include: /src/
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                include: /src/

            },
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 10 * 1024,
                    name: '[name].[ext]',
                    outputPath: 'img',
                    esModule: false
                },
                exclude: /node_modules/,

            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new VueLoaderLibPlugin(),
        new HtmlWebpackPlugin({
            template: __dirname + '/public/index.html'
        })
    ],
    devServer: {
        host: 'localhost',
        port: 8080,
        hot: true,
        open: true,
        proxy: {
            '/api': {
                target: 'http://lemall.futurefe.com/',
                changeOrigin: true
            }
        }
    },
    mode: 'development'
}