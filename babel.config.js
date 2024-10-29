
const { dependencies } = require('./package.json')

module.exports = {
    presets: [
        ['@babel/preset-env', { corejs: dependencies['core-js'], useBuiltIns: 'usage' }],
        ['@babel/preset-react', { runtime: 'automatic' }],
    ],
    sourceType: 'unambiguous'
}
