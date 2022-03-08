module.exports = {
	env: {
		commonjs: true,
		es2021: true,
		node: true,
	},
	extends: [
		'airbnb-base',
	],
	parserOptions: {
		ecmaVersion: 13,
	},
	rules: {
		indent: 'off',
		'consistent-return': 'off',
		'no-param-reassign': 'off',
		'class-methods-use-this': 'off',
		'import/order': 'off',
		'func-names': 'off',
		'no-restricted-syntax': 'off',
	},
	overrides: [
		{
			rules: { 'no-undef': 'off' },
		},
	],
};
