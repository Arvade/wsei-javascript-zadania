const path = require("path");

module.exports = {
    entry: {
        app: [
            './js/app.js',
            './js/zadanie00.js',
            './js/zadanie07.js',
            './js/zadanie08.js',
            './js/zadanie09.js'
        ],
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'dist')
    }
};

