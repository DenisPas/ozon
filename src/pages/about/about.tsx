import * as s from './about.module.pcss';

export function AboutPage(): React.JSX.Element {
	return (
		<section className={ s.about }>
			<h1>About</h1>
			<p>Демонстрационная страница для роутинга.</p>
		</section>
	);
}
