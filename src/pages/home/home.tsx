import { Badge, Button, Group } from '@mantine/core';
import classNames from 'classnames';
import { useState } from 'react';

import * as s from './home.module.pcss';

export function HomePage(): React.JSX.Element {
	const [count, setCount] = useState(0);

	const isActive = count > 0;
	const isHot = count >= 5;


	return (
		<section className={ s.home }>
			<h1 className={ s.title }>Ozon</h1>
			<p>Каркас проекта готов. Начинай разработку здесь.</p>

			{ /* 1) Mantine-компонент + classnames через проп className.
			      Склеиваем базовый класс и условные классы одним вызовом. */ }
			<Group>
				<Button
					className={ classNames(s.counter, {
						[s.active]: isActive,
						[s.hot]: isHot,
					}) }
					onClick={ () => setCount((value) => value + 1) }
				>
					count is { count }
				</Button>
				<Button variant="outline" onClick={ () => setCount(0) }>
					reset
				</Button>

			</Group>

			{ /* 2) Ещё один Mantine-компонент: класс выбирается тернарником */ }
			<Badge
				className={ classNames(s.badge, isHot ? s.badgeHot : s.badgeCalm) }
			>
				{ isHot ? 'жарко!' : 'спокойно' }
			</Badge>

			{ /* 3) Собственная кнопка на PCSS-модуле: строка + объект условий вместе */ }
			<button
				type="button"
				className={ classNames(s.button, 'clickable', {
					[s.active]: isActive,
				}) }
				onClick={ () => setCount((value) => value + 1) }
			>
				own styled: { count }
			</button>
		</section>
	);
}
