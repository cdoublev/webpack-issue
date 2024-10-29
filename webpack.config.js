
module.exports = {
    mode: 'development',
    module: {
        rules: [{
            exclude: /node_modules/,
            test: /\.[cm]?js$/,
            use: 'babel-loader',
        }],
    },
    optimization: {
        runtimeChunk: 'single',
        splitChunks: { chunks: 'all', name: 'common' },
    },
}
