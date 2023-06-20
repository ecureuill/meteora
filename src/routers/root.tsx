import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../components/.';

export default function Root() {
	return (
		<>
			<Header />
			<main>
				<h1 className='visuallyhidden'>Meteora</h1>
				<Outlet />
			</main>
			<Footer/>
		</>
	);
}