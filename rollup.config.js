import resolve from 'rollup-plugin-node-resolve';
import serve from 'rollup-plugin-serve';
import typescript from 'rollup-plugin-typescript2';

export default {

    //  Our games entry point (edit as required)
    input: [
        './src/index.ts'
    ],

    //  Where the build file is to be generated.
    //  Most games being built for distribution can use iife as the module type.
    //  You can also use 'umd' if you need to ingest your game into another system.
    //  The 'intro' property can be removed if using Phaser 3.21 or above. Keep it for earlier versions.
    output: {
        globals: {
            'babylonjs-materials': 'MATERIALS',
            'babylonjs-gui': 'BABYLON.GUI',
        },
        file: './output/game.js',
        name: 'MyGame',
        format: 'iife',
        sourcemap: true,
        intro: 'var global = window;'
    },

    plugins: [
        //  Parse our .ts source files
        resolve({
            extensions: ['.ts', '.tsx']
        }),

        typescript(),

        //  See https://www.npmjs.com/package/rollup-plugin-serve for config options
        serve({
            open: true,
            contentBase: 'output',
            port: 20002,
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        })
    ]
};