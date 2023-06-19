import './styles.css';
import data from '../../l10n/pt-BR.json';
import { Dispatch, SetStateAction } from 'react';

type MenuButtonProps = {
	open: boolean
	setOpen: Dispatch<SetStateAction<boolean>>
};

const MenuButton = ( {open, setOpen}: MenuButtonProps): JSX.Element => {
	return (
		<button 
			aria-label={data['controls.button.menu.label']}
			className={`MenuButton MenuButton-${open? 'close' : 'open'}`}
			onClick={() => setOpen(prev => !prev)}
		>
			<span className='visuallyhidden'>
				{open? data['controls.button.menu.description.close'] : data['controls.button.menu.description.open']}
			</span>
		</button>
	);
};

export default MenuButton;