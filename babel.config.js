module.exports = {presets: [[
    '@babel/preset-typescript',
    {
      isTSX: true,
      allExtensions: true,
      allowNamespaces: true,
      onlyRemoveTypeImports: true,
    },
  ],'@babel/preset-env', '@babel/preset-react'], plugins: ['@babel/plugin-transform-react-jsx']}