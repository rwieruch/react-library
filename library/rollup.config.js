import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import typescript from '@rollup/plugin-typescript';

export default {
  input: {
    main: './src/index.ts',
    data: './src/Data/index.ts',
    select: './src/Select/index.tsx',
    common: './src/common/index.ts',
  },

  output: [
    // ES module version, for modern browsers
    {
      name: 'react-library',
      dir: `${__dirname}/lib`,
      format: 'es',
      sourcemap: true,
      entryFileNames: '[name].js',
      preserveModules: true,
    },
    // SystemJS version, for older browsers
    // {
    //   dir: `${__dirname}/lib/nomodule`,
    //   format: 'system',
    //   sourcemap: true,
    // },
  ],
  external: ['react', 'react-dom', 'styled-components'],
  plugins: [
    resolve({
      browser: true,
    }),
    commonjs({
      sourceMap: true,
      exclude: 'src/**',
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    typescript({ sourceMap: true }),
    terser({
      module: true,
    }),
  ],
};
