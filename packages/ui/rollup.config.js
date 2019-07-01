import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
  input: 'src/index.js',
	external: [ 'react', 'react-dom', 'styled-components', 'styled-system', '@styled-system/css' ],
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