import autoprefixer from 'autoprefixer';
import postcssPresetMantine from 'postcss-preset-mantine';
import postcssSimpleVars from 'postcss-simple-vars';

export default {
	plugins: [
		// Вложенность (& в .pcss), миксины light/dark, rem()/em() и пр.
		postcssPresetMantine(),
		// Брейкпоинты Mantine, доступные как $mantine-breakpoint-* в .pcss.
		postcssSimpleVars({
			variables: {
				'mantine-breakpoint-xs': '36em',
				'mantine-breakpoint-sm': '48em',
				'mantine-breakpoint-md': '62em',
				'mantine-breakpoint-lg': '75em',
				'mantine-breakpoint-xl': '88em',
			},
		}),
		autoprefixer(),
	],
};
