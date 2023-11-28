var path = require("path");

module.exports = {
    mode: "none",
    entry: "./src/App.fs.js",
    output: {
        path: path.join(__dirname, "./dist"),
        filename: "main.js"
    },
    devServer: {
        static: path.join(__dirname, "./dist")
    }
}