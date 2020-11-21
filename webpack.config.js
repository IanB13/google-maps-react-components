const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, ''),
        library: 'google-maps-react-components',
        libraryTarget: 'umd'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env' ,'@babel/preset-react']
                    }
                }
            }
        ]
    },
    devtool: 'inline-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('development')
            }
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            react: require.resolve("react"),
            'react-dom': require.resolve("react")
        }
      },
      externals: {
        react: 'react',
        reactDOM: 'react-dom'
      }
};