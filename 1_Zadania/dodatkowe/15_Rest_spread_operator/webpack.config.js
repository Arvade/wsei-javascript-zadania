const path = require("path");

module.exports = {
    entry: {
        app: ['./js/app.js', './js/zadanie03.js'],
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'dist')
    }
};
