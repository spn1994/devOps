// eslint.config.cjs
module.exports = {
  parser: '@typescript-eslint/parser', // Define o parser para arquivos TypeScript
  parserOptions: {
    ecmaVersion: 2020, // Suporte para sintaxe moderna
    sourceType: 'module', // Define o uso de módulos ES
    ecmaFeatures: {
      jsx: true, // Habilita JSX se você estiver usando React
    },
  },
  plugins: ['@typescript-eslint'], // Adiciona o plugin do TypeScript
  extends: [
    'eslint:recommended', // Regras recomendadas do ESLint
    'plugin:@typescript-eslint/recommended', // Regras recomendadas para TypeScript
    'plugin:react/recommended', // Se você estiver usando React
  ],
  env: {
    browser: true, // Define que o código é para o ambiente de navegador
    es2020: true, // Define suporte ao ECMAScript 2020
    node: true, // Habilita o ambiente Node.js
  },
  settings: {
    react: {
      version: 'detect', // Detecta automaticamente a versão do React
    },
  },
  files: ['**/*.ts', '**/*.tsx'], // Especifica as extensões dos arquivos que você deseja verificar
  rules: {
    'semi': ['error', 'always'], // Força o uso de ponto e vírgula
    'quotes': ['error', 'single'], // Força o uso de aspas simples
    '@typescript-eslint/no-unused-vars': ['error'], // Verifica variáveis não usadas
    'react/prop-types': 'off', // Desabilita a verificação de prop-types no React se você estiver usando TypeScript
  },
};
