import babel from 'rollup-plugin-babel'
import commonjs from 'rollup-plugin-commonjs'
import external from 'rollup-plugin-peer-deps-external'
import postcss from 'rollup-plugin-postcss'
import resolve from 'rollup-plugin-node-resolve'
import url from 'rollup-plugin-url'
import json from '@rollup/plugin-json'
import { terser } from 'rollup-plugin-terser'

import pkg from './package.json'

export default {
  input: 'src/index.js',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: 'hidden',

    },
    {
      file: pkg.module,
      format: 'es',
      sourcemap: 'hidden',
    },
    {
      file: `dist/fabscape-ui-react.min.js`,
      format: 'iife',
      sourcemap: 'hidden',
      name: 'fabscapeUIReact',
      globals: {
        'react': 'React'
      },
      plugins: [
        terser()
      ]
    }
  ],
  plugins: [
    external(),
    // Enable to import JSON
    json(),
    postcss({
      // Force prefix to CSS classes
      modules: {
        generateScopedName: 'fui__[local]'
      },
      // Required to enable generateScopedName option
      // https://github.com/egoist/rollup-plugin-postcss/blob/6480f02681d1526c102f3e99891b788d01031f32/src/postcss-loader.js#L75
      autoModules: false,
    }),
    url(),
    babel({
      exclude: 'node_modules/**',
      plugins: [ 'external-helpers' ]
    }),
    resolve(),
    commonjs()
  ]
}
