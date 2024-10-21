const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    entry: {
        AskPupkin: path.resolve(__dirname, './src/index.tsx')
    },
    
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './dist')
    },

    resolve: {
        extensions: [".ts", ".tsx", ".css", ".js", ".jsx"],
        alias: {
            "@app": path.resolve(__dirname, './src/app'),
            "@pages": path.resolve(__dirname, './src/pages'),
            "@widgets": path.resolve(__dirname, './src/widgets'),
            "@features": path.resolve(__dirname, './src/features'),
            "@entities": path.resolve(__dirname, './src/models'),
            "@shared": path.resolve(__dirname, './src/shared')
        },
        modules: ['node_modules']
    },

    mode: 'development',

    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                  // Creates `style` nodes from JS strings
                  "style-loader",
                  // Translates CSS into CommonJS
                  "css-loader",
                  // Compiles Sass to CSS
                  "sass-loader",
                ]
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        })
    ],

    devServer: {
        historyApiFallback: true,
        port: 3000,
        hot: true,
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        open: true
    }
}