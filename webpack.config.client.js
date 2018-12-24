const path = require('path');
const { ReactLoadablePlugin } = require("react-loadable/webpack");

const clientConfig = {
    entry: "./src/app.tsx",

    output: {
        filename: "bundle.js",
        chunkFilename: "[hash].chunk.js",
        publicPath: "/assets/",
        path: path.join(__dirname, "dist", "assets")
    },

    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        modules: [path.join(__dirname, 'src'), 'node_modules'],
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    },

    plugins: [
        new ReactLoadablePlugin({
            filename: path.join(__dirname, "dist", "stats", "reactLoadable.json")
        })
    ]
}

module.exports = clientConfig;
