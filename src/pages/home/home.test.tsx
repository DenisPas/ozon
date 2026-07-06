import { describe, expect, it } from 'vitest';

import { renderWithProviders } from '@/test-utils';

import { HomePage } from './home';

describe('HomePage', () => {
	it('рендерится без ошибок', () => {
		const { container } = renderWithProviders(<HomePage />);
		expect(container.firstChild).toBeInTheDocument();
	});
});
