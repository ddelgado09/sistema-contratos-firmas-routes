import path from 'path';
import nodeExternals from 'webpack-node-externals';
import { fileURLToPath } from 'url';

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
    }
}