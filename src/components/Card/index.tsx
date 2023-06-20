import { PropsWithChildren } from 'react';
import './styles.css';

type CardProps = {
	img: string
	direction?: 'col' | 'row'
};

const Card = ( {children, img, direction='col'}: PropsWithChildren<CardProps>): JSX.Element => {
	return (
		<figure className={`Card Card--${direction}`}>
			<img src={img} alt="" className='Card__img'/>
			<figcaption className='Card__caption'>
				{children}
			</figcaption>
		</figure>
	);
};

export default Card;