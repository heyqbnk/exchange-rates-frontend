import React from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { CardLayout } from './layouts/CardLayout';

function App() {
	return (
		<NextUIProvider>
			<div className="App">
				<CardLayout>Хуй</CardLayout>
			</div>
		</NextUIProvider>
	);
}

export default App;
