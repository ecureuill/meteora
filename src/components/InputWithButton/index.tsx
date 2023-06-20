import { InputHTMLAttributes } from 'react';
import { Button } from '../.';
import { Input } from '../.';
import './styles.css';

type InputWithButtonProps = {
	outlined: 'outlined' | 'inverted-outlined' | 'none',
	label: string,
	inputProps: InputHTMLAttributes<HTMLInputElement>,
}

const InputWithButton = ({label, outlined, inputProps}: InputWithButtonProps): JSX.Element => {
	return (		
		<div className='InputWithButton'>
			<Input label={label} {...inputProps}/>
			<Button className='InputWithButton__button' 
				outlined={outlined}
			>{label}</Button>
		</div>
	);
};

export default InputWithButton;