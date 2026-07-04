import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@mantine/core/styles.css';

import { App } from '@/app/app';
import { AppProviders } from '@/app/providers';

import './index.pcss';

const container = document.getElementById('root');

if (!container) {
	throw new Error('Root element #root not found');
}

createRoot(container).render(
	<StrictMode>
		<AppProviders>
			<App />
		</AppProviders>
	</StrictMode>,
);
