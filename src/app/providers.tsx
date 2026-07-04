import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';
import { BrowserRouter } from 'react-router-dom';

export function AppProviders({ children }: { children: ReactNode }): React.JSX.Element {
	return (
		<MantineProvider defaultColorScheme="auto">
			<BrowserRouter>{ children }</BrowserRouter>
		</MantineProvider>
	);
}
