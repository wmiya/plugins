const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin');

module.exports = {
    entry: path.join(__dirname, 'src/lib/index.js'),
    output: {
        filename: 'vue-toast.js',
        path: path.join(__dirname, 'dist'),
        library: 'vueToast',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                exclude: /node_modules/,
                options: {
                    loaders: {
                        scss: 'style-loader!css-loader!sass-loader'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
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
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    mode: 'production'
}