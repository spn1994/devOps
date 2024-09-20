// eslint.config.js
import { defineConfig } from 'eslint-define-config';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';
import typescriptEslintParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';

export default defineConfig([
  {
    languageOptions: {
      parser: typescriptEslintParser, // Define o parser para TypeScript
      parserOptions: {
        ecmaVersion: 2020, // Suporte para sintaxe moderna
        sourceType: 'module', // Define o uso de módulos ES
        ecmaFeatures: {
          jsx: true, // Habilita JSX se você estiver usando React
        },
      },
    },
    files: ['**/*.ts', '**/*.tsx'], // Especifica as extensões que você deseja verificar
    plugins: {
      '@typescript-eslint': typescriptEslintPlugin, // Adiciona o plugin do TypeScript
      react: reactPlugin, // Adiciona o plugin do React
    },
    rules: {
      'semi': ['error', 'always'], // Força o uso de ponto e vírgula
      'quotes': ['error', 'single'], // Força o uso de aspas simples
      '@typescript-eslint/no-unused-vars': ['error'], // Verifica variáveis não usadas
      'react/prop-types': 'off', // Desabilita a verificação de prop-types no React se você estiver usando TypeScript
    },
  },
]);
