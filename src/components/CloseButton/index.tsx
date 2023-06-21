import './styles.css';
import data from '../../l10n/pt-BR.json';
import { Dispatch, SetStateAction } from 'react';

type CloseButtonProps = {
	setOpen: Dispatch<SetStateAction<boolean>>
};

const CloseButton = ( {setOpen}: CloseButtonProps): JSX.Element => {
	return (
		<button 
			aria-label={data['controls.button.menu.label']}
			className={'CloseButton'}
			onClick={() => setOpen(prev => !prev)}
		>
			<span className='visuallyhidden'>
				{data['controls.modal.button.close']}
			</span>
		</button>
	);
};

export default CloseButton;