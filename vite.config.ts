/// <reference types="vitest/config" />
import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
	css: {
		modules: {
			// Читаемые имена классов в dev, хешированные в проде.
			localsConvention: 'camelCaseOnly',
		},
	},
	test: {
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/setup-tests.ts',
		css: true,
	},
});
