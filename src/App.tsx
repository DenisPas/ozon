import { NavLink, Route, Routes } from 'react-router-dom';

import styles from './App.module.pcss';
import { AboutPage } from './pages/about/about';
import { HomePage } from './pages/home/home';

export function App(): React.JSX.Element {
	return (
		<div className={ styles.app }>
			<nav className={ styles.nav }>
				<NavLink
					to="/"
					className={ ({ isActive }) => (isActive ? styles.active : undefined) }
				>
					Home
				</NavLink>
				<NavLink
					to="/about"
					className={ ({ isActive }) => (isActive ? styles.active : undefined) }
				>
					About
				</NavLink>
			</nav>

			<main className={ styles.main }>
				<Routes>
					<Route path="/" element={ <HomePage /> } />
					<Route path="/about" element={ <AboutPage /> } />
				</Routes>
			</main>
		</div>
	);
}
