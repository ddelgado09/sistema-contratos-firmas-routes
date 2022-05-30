import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { fileURLToPath } from 'url';
import CopyPlugin from 'copy-webpack-plugin';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export default {
    entry: './src/index.js',
    target: 'node',
    externals: [
        nodeExternals()
    ],
    externalsPresets: {
        node: true
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: [
            '.js'
        ]
    },
    module: {
        rules: [
            {
                test: /\.m?.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'src', 'assets/logs'),
                    to: 'assets/logs'
                }
            ]
        })
    ]
}