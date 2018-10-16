const path = require('path');

const defaults = {

};

module.exports = function (moduleOptions) {
    if (process.server) {
        return;
    }

    const options = Object.assign({}, defaults, this.options.adal, moduleOptions);

    // Remove module options
    const adalOptions = Object.assign({}, options);

    // Register plugin
    this.addPlugin({
        src: path.resolve(__dirname, 'plugin.js'),
        fileName: 'adal.js',
        options: {
            adalOptions
        }
    })
};

module.exports.meta = require('./package.json');
