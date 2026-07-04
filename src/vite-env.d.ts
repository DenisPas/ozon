/// <reference types="vite/client" />

declare module '*.module.pcss' {
	const classes: { readonly [key: string]: string };
	export = classes;
}

declare module '*.module.css' {
	const classes: { readonly [key: string]: string };
	export = classes;
}
