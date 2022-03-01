const path = require('path');

module.exports = {
    entry: './src/assets/js/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './src/assets/dist')
    },
    module: {
        rules:[
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
            {
                test: /\.s[ac]ss$/i,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'file-loader',
                        options: { outputPath: '../css/', name: '[name].min.css'}
                    },
                    'sass-loader'
                ]
            }
            // {
            //     test: /\.s[ac]ss$/i,
            //     use: [
            //       // Creates `style` nodes from JS strings
            //       "style-loader",
            //       // Translates CSS into CommonJS
            //       "css-loader",
            //       // Compiles Sass to CSS
            //       "sass-loader",
            //       {
            //         loader: 'file-loader',
            //         options: { outputPath: 'css/', name: '[name].min.css'}
            //     },
            //     ],
            //   },
        ]
    }
}
