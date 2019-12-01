import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import livereload from 'rollup-plugin-livereload';
import { terser } from 'rollup-plugin-terser';
import postcss from 'rollup-plugin-postcss';
import autoPreprocess from 'svelte-preprocess';
import { fileRouter } from 'svelte-filerouter'
import alias from 'rollup-plugin-alias';
import svg from 'rollup-plugin-svg'
import path from 'path'
const { markdown } = require('svelte-preprocess-markdown');

const production = !process.env.ROLLUP_WATCH;

export default {
    input: 'src/main.js',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        svg(),
        alias({
            resolve: ['.js', '.svelte', '/index.js'],
            entries: [
                { find: '@', replacement: path.resolve(__dirname + '/src') }
            ]
        }),
        // fileRouter({
        //     unknownPropWarnings: false
        //     // outputFile: './temp/routes.js'
        // }),
        svelte({
            extensions: ['.svelte', '.md'],
            preprocess:[
                markdown(),
                autoPreprocess({
                    postcss: true
                }),
            ],
            // enable run-time checks when not in production
            dev: !production,
            css: css => {
                css.write('public/build/components.css');
            }
        }),
        postcss({
            extract: 'public/build/utils.css'
        }),

        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration —
        // consult the documentation for details:
        // https://github.com/rollup/rollup-plugin-commonjs
        resolve({
            browser: true,
            dedupe: importee => importee === 'svelte' || importee.startsWith('svelte/')
        }),
        commonjs(),

        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && livereload('public'),

        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && terser()
    ],
    watch: {
        clearScreen: false
    }
};