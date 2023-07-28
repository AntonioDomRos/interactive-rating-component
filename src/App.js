import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Rating from './components/Rating';
import Thankful from './components/Thankful';
import { RatingProvider } from './context/RatingContext';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Rating />,
	},
	{
		path: '/thankful',
		element: <Thankful />,
	},
]);

function App() {
	return (
		<RatingProvider>
			<RouterProvider router={router} />
		</RatingProvider>
	);
}

export default App;
