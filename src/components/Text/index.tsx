import { HTMLAttributes } from 'react';
import './styles.css';

interface TextProps extends HTMLAttributes<HTMLElement> {
	variant?: 'title-1' | 'title-2' | 'paragraph';
	size?: 'small' | 'medium' | 'large' | 'big';
	weight?: 'normal' | 'bold' | 'bolder'
	align?: 'center' | 'left'
}

const Text = ( {variant, size, children, className, weight='normal', align='left',  ...props}: React.PropsWithChildren<TextProps>): JSX.Element => {
	const styles = `Text Text--${weight} ${align} ${className? className: ''}`;

	switch(variant){
	case 'title-1':
		return (
			<h1 className={`${styles} Text--heading Text--${size === undefined? 'big': size}`} {...props}>
				{children}
			</h1>
		);
	case 'title-2':
		return (
			<h2 className={`${styles} Text--heading Text--${size === undefined? 'large': size}`} {...props}>
				{children}
			</h2>
		);

	case 'paragraph':
		return(
			<p className={`${styles} Text--${size === undefined? 'medium': size}`} {...props}>
				{children}
			</p>
		);
	default:
		return(
			<span className={`${styles} Text--${size === undefined? 'medium': size}`} {...props}>
				{children}
			</span>
		);	
	}
};

export default Text;
