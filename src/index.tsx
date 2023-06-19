import React from 'react';
import ReactDOM from 'react-dom/client';

if (process.env['NODE_ENV'] !== 'production') {
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	const axe = require('@axe-core/react');
	axe(React, ReactDOM, 1000);
}

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);


root.render(
	<React.StrictMode>
	</React.StrictMode>
);