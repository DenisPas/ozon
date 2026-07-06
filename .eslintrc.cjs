/* eslint-env node */
module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['@typescript-eslint', 'react-refresh'],
	settings: {
		react: { version: 'detect' },
	},
	ignorePatterns: ['dist', 'node_modules', '.eslintrc.cjs'],
	overrides: [
		{
			files: ['**/*.test.{ts,tsx}', 'src/test-utils.tsx', 'src/setup-tests.ts'],
			rules: {
				'react-refresh/only-export-components': 'off',
			},
		},
	],
	rules: {
		'react-refresh/only-export-components': [
			'warn',
			{ allowConstantExport: true },
		],
		'@typescript-eslint/no-explicit-any': 'error',
		'@typescript-eslint/consistent-type-imports': [
			'error',
			{ prefer: 'type-imports' },
		],
		'no-console': ['warn', { allow: ['warn', 'error'] }],
	},
};
