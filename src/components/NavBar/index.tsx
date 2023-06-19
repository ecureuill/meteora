import { Dispatch, SetStateAction } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuButton, Text } from '../.';
import TabletOrBellow from '../MediaQuery/TabletOrAbove';
import './styles.css';

type NavBarProps = {
	direction: 'col' | 'row' 
	open?: boolean
	setOpen?: Dispatch<SetStateAction<boolean>>
}

const NavBar = ({direction = 'row', open, setOpen}: NavBarProps) => {
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
			<TabletOrBellow>
				<div className='NavBar__action'>
					<MenuButton open={open!} setOpen={setOpen!}/>
				</div>
			</TabletOrBellow>
			{links.map(link => 
				<Link to={link.to} className={`NavBar__link ${pathname === link.to? 'NavBar__link--current': ''}`}>
					<Text weight='bolder'>{link.label}</Text>
				</Link>
			)}
		</nav>
	);
};

export default NavBar;