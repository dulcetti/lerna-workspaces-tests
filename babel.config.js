module.exports = {
  plugins: ['babel-plugin-styled-components'],
  presets: [
    [
      '@babel/preset-react',
      {
        'runtime': 'automatic',
      },
    ],
    '@babel/preset-typescript',
    ['@babel/preset-env', { targets: { node: 'current' } }],
  ],
  ignore: ['**/stories.tsx', '**/spec.tsx', '**/styles.ts', '**/interface.ts'],
};
