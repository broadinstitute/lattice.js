const path = require("path");
const TerserJSPlugin = require("terser-webpack-plugin");

const filename = "random-generator";
const library = "RandomDataLib";

module.exports = {
    optimization: {
        minimizer: [new TerserJSPlugin({})]
    },
    entry: "../../src/libs/RandomDataLib.js",
    output: {
        filename: `js/${filename}.min.js`,
        path: path.resolve(__dirname, "build"),
        libraryTarget: "umd",
        library: library,
    },
    devtool: "inline-source-map"
};
