// @ts-check

import { includeIgnoreFile } from '@eslint/compat';
import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import perfectionist from 'eslint-plugin-perfectionist';
import svelte from 'eslint-plugin-svelte';
import globals from 'globals';
import { fileURLToPath } from 'node:url';
import ts from 'typescript-eslint';

export default ts.config(
  js.configs.recommended,
  ...ts.configs.recommended,
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  perfectionist.configs['recommended-alphabetical'],
  {
    rules: {
      '@typescript-eslint/no-empty-object-type': 'off',
      'no-empty-pattern': 'off',
      'perfectionist/sort-imports': [
        'error',
        {
          customGroups: {
            type: {},
            value: {},
          },
          environment: 'node',
          groups: [
            'type',
            ['builtin', 'external'],
            'internal-type',
            'internal',
            ['parent-type', 'sibling-type', 'index-type'],
            ['parent', 'sibling', 'index'],
            'object',
            'unknown',
          ],
          ignoreCase: true,
          internalPattern: ['^\\$(app|env|lib|routes)/.*'],
          maxLineLength: undefined,
          newlinesBetween: 'always',
          order: 'asc',
          type: 'alphabetical',
        },
      ],
    },
  },
  includeIgnoreFile(fileURLToPath(new URL('./.gitignore', import.meta.url))),
  ...svelte.configs['flat/recommended'],
  ...svelte.configs['flat/prettier'],
  {
    files: ['**/*.svelte', '**/*.svelte.ts'],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
);
