module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: ['plugin:react/recommended', 'standard-with-typescript'],
	overrides: [],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: { jsx: true },
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: './tsconfig.json', // Agrega esta línea para especificar el archivo tsconfig.json
	},
	plugins: [
		'react',
		'@typescript-eslint', // Agrega este plugin para habilitar las reglas de TypeScript
	],
	rules: {},
};
