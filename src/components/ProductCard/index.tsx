import { PropsWithChildren } from 'react';
import './styles.css';

type ProductCardProps = {
	img: string
};

const ProductCard = ( {children, img}: PropsWithChildren<ProductCardProps>): JSX.Element => {
	return (
		<figure className='ProductCard'>
			<img src={img} alt="" className='ProductCard_img'/>
			<figcaption className='ProductCard_caption'>
				{children}
			</figcaption>
		</figure>
	);
};

export default ProductCard;