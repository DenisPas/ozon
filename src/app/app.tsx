import { NavLink, Route, Routes } from 'react-router-dom';

import { AboutPage } from '@/pages/about/about';
import { HomePage } from '@/pages/home/home';

import * as s from './app.module.pcss';

const ROUTES = {
	home: '/',
	about: '/about',
} as const;

export function App(): React.JSX.Element {
	return (
		<div className={ s.app }>
			<nav className={ s.nav }>
				<NavLink
					to={ ROUTES.home }
					className={ ({ isActive }) => (isActive ? s.active : undefined) }
				>
					Home
				</NavLink>
				<NavLink
					to={ ROUTES.about }
					className={ ({ isActive }) => (isActive ? s.active : undefined) }
				>
					About
				</NavLink>
			</nav>

			<main className={ s.main }>
				<Routes>
					<Route path={ ROUTES.home } element={ <HomePage /> } />
					<Route path={ ROUTES.about } element={ <AboutPage /> } />
				</Routes>
			</main>
		</div>
	);
}
