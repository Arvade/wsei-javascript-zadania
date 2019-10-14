const path = require("path");

module.exports = {
    entry: {
        app: ['./js/app.js', './js/zadanie06.js', './js/zadanie07.js'],
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'dist')
    }
};

