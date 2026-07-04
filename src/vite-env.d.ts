/// <reference types="vite/client" />

// Типизация CSS Modules: import styles from './x.module.pcss'
declare module '*.module.pcss' {
	const classes: { readonly [key: string]: string };
	export default classes;
}

declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export default classes;
}
