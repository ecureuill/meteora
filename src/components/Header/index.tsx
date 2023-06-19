import Logo from '../../assets/logo.png';
import { MenuButton, NavBar, SearchBar } from '../.';
import './styles.css';
import DesktopOrAbove from '../MediaQuery/DesktopOrAbove';
import TabletOrBellow from '../MediaQuery/TabletOrAbove';
import { useState } from 'react';

const Header = (): JSX.Element => {

	const [open, setOpen] = useState(false);

	return (
		<header className= {'Header'}>
			<div className='Header__menubar'>
				<img src={Logo} alt='Meteora'/>
				<DesktopOrAbove>
					<NavBar direction='row'/>
					<SearchBar variant='zero'/>
				</DesktopOrAbove>
				<TabletOrBellow>
					<MenuButton open={open} setOpen={setOpen} />
				</TabletOrBellow>
			</div>
			<TabletOrBellow>
				<div className='Header__searchbar'>
					<SearchBar/>
					{open && <NavBar direction='col' open={open} setOpen={setOpen} />}
				</div>
			</TabletOrBellow>
		</header>
	);
};

export default Header;