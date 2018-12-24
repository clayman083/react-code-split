const path = require('path');
const nodeExternals = require('webpack-node-externals');

const serverConfig = {
    entry: "./src/server.tsx",

    output: {
        filename: "main.js",
        chunkFilename: "[hash].chunk.js",
        path: path.join(__dirname, "dist", "server")
    },

    target: 'node',

    node: {
        console: false,
        global: false,
        process: false,
        Buffer: false,
        __filename: false,
        __dirname: false
    },

    externals: nodeExternals(),

    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
    }
}


module.exports =  serverConfig;
