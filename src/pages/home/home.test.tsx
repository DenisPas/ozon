import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';

import { renderWithProviders, screen } from '@/test-utils';

import { HomePage } from './home';

describe('HomePage', () => {
	it('рендерит заголовок', () => {
		renderWithProviders(<HomePage />);
		expect(screen.getByRole('heading', { name: 'Ozon' })).toBeInTheDocument();
	});

	it('увеличивает счётчик по клику на кнопку Mantine', async () => {
		const user = userEvent.setup();
		renderWithProviders(<HomePage />);

		const button = screen.getByRole('button', { name: /count is 0/ });
		await user.click(button);

		expect(
			screen.getByRole('button', { name: /count is 1/ }),
		).toBeInTheDocument();
	});
});
