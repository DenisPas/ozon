import { Button, Group } from '@mantine/core';
import { useState } from 'react';

import styles from './home.module.pcss';

export function HomePage(): React.JSX.Element {
	const [count, setCount] = useState(0);

	return (
		<section className={ styles.home }>
			<h1 className={ styles.title }>Ozon</h1>
			<p>Каркас проекта готов. Начинай разработку здесь.</p>

			{ /* Компонент Mantine (готовый UI-кит) */ }
			<Group>
				<Button onClick={ () => setCount((value) => value + 1) }>
					count is { count }
				</Button>
				<Button variant="outline" onClick={ () => setCount(0) }>
					reset
				</Button>
			</Group>

			{ /* Собственная кнопка со стилями PCSS-модуля */ }
			<button
				type="button"
				className={ styles.button }
				onClick={ () => setCount((value) => value + 1) }
			>
				own styled: { count }
			</button>
		</section>
	);
}
