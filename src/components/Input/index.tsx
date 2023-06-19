import { InputHTMLAttributes, useId } from 'react';
import { Text } from '../.';
import './styles.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	showLabel?: boolean
	label: string,
	errormessage?: string | undefined
}

const Input = ( {label, errormessage, showLabel=true, ...props}: InputProps): JSX.Element => {
	const id = useId();
	return (
		<div className='Input'>
			{
				!showLabel &&
			<label htmlFor={id} className='Input__label'>
				<Text variant='paragraph' size='small'>{label}</Text>
			</label>
			}
			<input 
				id={id} 
				aria-label={label}
				className='Input__field' 
				{...props}
			/>
			<span className='Input__errortext' role='alert' aria-live='assertive'>
				{errormessage}
			</span>
		</div>
	);
};

export default Input;