import styles from './about.module.pcss';

export function AboutPage(): React.JSX.Element {
	return (
		<section className={ styles.about }>
			<h1>About</h1>
			<p>Демонстрационная страница для роутинга.</p>
		</section>
	);
}
