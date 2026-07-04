import { MantineProvider } from '@mantine/core';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// Стили Mantine импортируем до собственных, чтобы их можно было переопределять.
import '@mantine/core/styles.css';

import { App } from './App';
import './index.pcss';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Root element #root not found');
}

createRoot(container).render(
	<StrictMode>
		<MantineProvider defaultColorScheme="auto">
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</MantineProvider>
	</StrictMode>,
);
