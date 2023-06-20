import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/.';

export default function Root() {
	return (
		<>
			<Header />
			<main>
				<Outlet />
			</main>
			<Footer/>
		</>
	);
}