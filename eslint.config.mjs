import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import prettierPlugin from 'eslint-plugin-prettier';
import prettierConfig from 'eslint-config-prettier';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
	baseDirectory: __dirname,
});

const eslintConfig = [
	// Базовые правила Next.js + TypeScript
	...compat.extends('next/core-web-vitals', 'next/typescript'),

	// Игнор
	{
		ignores: [
			'node_modules/**',
			'.next/**',
			'out/**',
			'build/**',
			'next-env.d.ts',
		],
	},

	// Prettier + твои кастомные правила
	{
		plugins: {
			prettier: prettierPlugin,
		},
		rules: {
			...prettierConfig.rules,
			'prettier/prettier': [
				'error',
				{
					useTabs: true,
					tabWidth: 2,
					semi: true,
					singleQuote: true,
				},
			],
			indent: ['error', 'tab'],
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
		},
	},
];

export default eslintConfig;
