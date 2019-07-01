import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
	external: [
    'react',
    'react-dom',
    'prop-types',
    'styled-components',
    'styled-system',
    '@styled-system/css',
    '@styled-system/prop-types',
    'hex-to-rgba',
    'hsluv',
    'react-feather'
  ],
	output: [
	  {
	    file: 'dist/index.cjs.js',
	    format: 'cjs'
	  },
		{
      file: 'dist/index.esm.js',
      format: 'es'
    },
	],
	plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs()
  ]
}