import { ComponentPropsWithoutRef, PropsWithChildren } from 'react';
import {Text} from '../.';
import './styles.css';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
	outlined?: 'outlined'
}

const Button = ( {outlined, children, className,...props}: PropsWithChildren<ButtonProps>): JSX.Element => {
	return (
		<button 
			className={`
				Button 
				${outlined? `Button--${outlined}`: ''} 
				${className? className: ''}`} 
			{...props} >
			<Text size='medium' weight='bold'>
				{children}
			</Text>
		</button>
	);
};

export default Button;