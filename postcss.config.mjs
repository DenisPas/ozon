import autoprefixer from 'autoprefixer';
import postcssPresetMantine from 'postcss-preset-mantine';
import postcssSimpleVars from 'postcss-simple-vars';

export default {
	plugins: [
		postcssPresetMantine({ autoRem: true }),
		postcssSimpleVars({
			variables: {
				'mantine-breakpoint-xs': '576px',
				'mantine-breakpoint-sm': '768px',
				'mantine-breakpoint-md': '992px',
				'mantine-breakpoint-lg': '1200px',
				'mantine-breakpoint-xl': '1408px',
			},
		}),
		autoprefixer(),
	],
};
