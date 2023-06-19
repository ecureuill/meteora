import './styles.css';
import data from '../../l10n/pt-BR.json';

type MenuButtonProps = {
	open: boolean
};

const MenuButton = ( {open}: MenuButtonProps): JSX.Element => {
	return (
		<button 
			aria-label={data['controls.button.menu.label']}
			className={`MenuButton MenuButton-${open? 'close' : 'open'}`}
		>
			<span className='visuallyhidden'>
				{open? data['controls.button.menu.description.close'] : data['controls.button.menu.description.open']}
			</span>
		</button>
	);
};

export default MenuButton;