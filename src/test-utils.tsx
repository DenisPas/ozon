import { MantineProvider } from '@mantine/core';
import { render, type RenderOptions } from '@testing-library/react';
import type { ReactElement, ReactNode } from 'react';

function AllProviders({ children }: { children: ReactNode }): React.JSX.Element {
	return <MantineProvider>{ children }</MantineProvider>;
}

export function renderWithProviders(
	ui: ReactElement,
	options?: Omit<RenderOptions, 'wrapper'>,
): ReturnType<typeof render> {
	return render(ui, { wrapper: AllProviders, ...options });
}

export * from '@testing-library/react';
