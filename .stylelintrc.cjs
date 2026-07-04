module.exports = {
	extends: ['stylelint-config-standard'],
	rules: {
		// Поддержка синтаксиса CSS Modules (:global, :local, composes).
		'selector-pseudo-class-no-unknown': [
			true,
			{ ignorePseudoClasses: ['global', 'local'] },
		],
		'property-no-unknown': [true, { ignoreProperties: ['composes'] }],
		// Разрешаем camelCase имена классов (localsConvention: camelCaseOnly).
		'selector-class-pattern': null,
	},
};
