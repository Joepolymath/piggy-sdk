const banner = `// Piggy-SDK v${lib.version} Copyright (c) 2023 Joshua Ajagbe and contributors`;
export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
      preferConst: true,
      banner,
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true,
      exports: 'named',
      banner,
    },
  ],
};
