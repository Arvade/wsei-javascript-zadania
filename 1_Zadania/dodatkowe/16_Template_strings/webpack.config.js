const path = require("path");

module.exports = {
    entry: {
        app: './js/app.js',
    },
    output: {
        filename: "out.js",
        path: path.resolve(__dirname, 'dist')
    }
};
