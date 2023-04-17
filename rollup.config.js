export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'named',
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  ],
};
