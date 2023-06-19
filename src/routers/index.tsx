import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Root from './root';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <HomePage />
			}
		]
	}
]);