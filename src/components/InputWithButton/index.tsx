import { ComponentPropsWithoutRef } from 'react';
import { Button } from '../.';
import { Input } from '../.';
import './styles.css';

interface InputWithButtonProps extends ComponentPropsWithoutRef<'input'> {
	outlined: 'outlined' | 'inverted-outlined' | 'none',
	label: string,
}

const InputWithButton = ({label, outlined, ...props}: InputWithButtonProps): JSX.Element => {
	return (		
		<div className='InputWithButton'>
			<Input label={label} {...props}/>
			<Button type='submit' className='InputWithButton__button' 
				outlined={outlined}
			>{label}</Button>
		</div>
	);
};

export default InputWithButton;