const path = require("path");

module.exports = {
    entry: {
        app: ['./js/app.js', './js/zadanie01.js', './js/zadanie02.js', './js/zadanie04.js'],
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'dist')
    }
};

