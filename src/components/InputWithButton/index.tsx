import { InputHTMLAttributes } from 'react';
import { Button } from '../.';
import { Input } from '../.';
import './styles.css';

type InputWithButtonProps = {
	variant?: 'zero',
	label: string,
	inputProps: InputHTMLAttributes<HTMLInputElement>,
}

const InputWithButton = ({label, variant, inputProps}: InputWithButtonProps): JSX.Element => {
	return (		
		<div className='InputWithButton'>
			<Input label='Pesquisar' {...inputProps}/>
			<Button className={`InputWithButton__button ${variant !== undefined? 'InputWithButton__button--zero': ''}`} outlined='outlined'>{label}</Button>
		</div>
	);
};

export default InputWithButton;