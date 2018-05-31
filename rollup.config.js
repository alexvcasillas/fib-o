import filesize from 'rollup-plugin-filesize';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';

export default [
  {
    input: './src/index.js',
    output: {
      file: './dist/fib-o.js',
      format: 'cjs'
    },
    plugins: [resolve(), babel(), uglify(), filesize()]
  },
  {
    input: './src/index.js',
    output: {
      file: './dist/fib-o.umd.js',
      format: 'umd',
      name: 'fib-o'
    },
    plugins: [resolve(), babel(), uglify(), filesize()]
  },
  {
    input: './src/index.js',
    output: {
      file: './dist/fib-o.module.js',
      format: 'es'
    },
    plugins: [resolve(), babel(), uglify(), filesize()]
  }
];
