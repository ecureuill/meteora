import { ComponentPropsWithoutRef, useId } from 'react';
import { Text } from '../.';
import './styles.css';

interface RadioProps extends ComponentPropsWithoutRef<'input'>  {
	label: string,
}

const Radio = ( {label, ...props}: RadioProps): JSX.Element => {
	const id = useId();
	return (
		<div className='Radio'>
			<input
				type='radio' 
				id={id} 
				className='Radio__field' 
				{...props}
			/>
			<label htmlFor={id} className='Radio__label'>
				<Text variant='paragraph' size='small'>{label}</Text>
			</label>
		</div>
	);
};

export default Radio;