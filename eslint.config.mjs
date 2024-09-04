// eslint.config.js
export default {
  files: ['**/*.ts', '**/*.tsx'], // Especifica as extensões que você deseja verificar
  rules: {
    // Suas regras de ESLint aqui
    'semi': ['error', 'always'],
    'quotes': ['error', 'single'],
  },
  // Outras configurações conforme necessário
};