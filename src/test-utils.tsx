import { MantineProvider } from '@mantine/core';
import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

function AllProviders({ children }: { children: ReactNode }): React.JSX.Element {
	return <MantineProvider>{ children }</MantineProvider>;
}

/**
 * Рендер компонента со всеми глобальными провайдерами (Mantine и т.д.).
 * Используй вместо стандартного render из @testing-library/react.
 */
export function renderWithProviders(
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
	return render(ui, { wrapper: AllProviders, ...options });
}

export * from '@testing-library/react';
