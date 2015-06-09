module.exports = {
    entry: './app/assets/js/index.jsx',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/app/assets/js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'jsx-loader'
            }
        ]
    },
    externals: {
        'react': 'React'
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};