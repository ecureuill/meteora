import { Link, useLocation } from 'react-router-dom';
import { MenuButton, Text } from '../.';
import './styles.css';

type NavBarProps = {
	direction: 'col' | 'row' 
}

const NavBar = ({direction = 'row'}: NavBarProps) => {
	const { pathname } = useLocation();
	const links = [
		{
			to: '/',
			label: 'Home'
		},
		{
			to: '/lojas',
			label: 'Nossas lojas'
		},
		{
			to: '/news',
			label: 'Novidades'
		},
		{
			to: '/promos',
			label: 'Promoções'
		}
	];
	return (
		<nav className={`NavBar NavBar--${direction}`}>
			<div className='NavBar__action'>
				<MenuButton open={true}/>
			</div>
			{links.map(link => 
				<Link to={link.to} className={`NavBar__link ${pathname === link.to? 'NavBar__link--current': ''}`}>
					<Text weight='bolder'>{link.label}</Text>
				</Link>
			)}
		</nav>
	);
};

export default NavBar;