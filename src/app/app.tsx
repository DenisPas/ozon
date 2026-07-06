import { Route, Routes } from 'react-router-dom';

import { HomePage } from '@/pages/home/home';

import * as s from './app.module.pcss';

const ROUTES = {
	home: '/',
} as const;

export function App(): React.JSX.Element {
	return (
		<div className={ s.app }>
			<main className={ s.main }>
				<Routes>
					<Route path={ ROUTES.home } element={ <HomePage /> } />
				</Routes>
			</main>
		</div>
	);
}
