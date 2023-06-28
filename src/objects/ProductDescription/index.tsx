import { useEffect, useState } from 'react';
import { ProductDetails } from '../.';
import { Button, Modal, Text } from '../../components';
import data from '../../l10n/pt-BR.json';
import { products } from '../../services/products';
import './styles.css';

type ProductDescriptionProps = {
	productId: string, 
};

const ProductDescription = ( {productId}: ProductDescriptionProps): JSX.Element => {

	const [ openModal, setOpenModal ] = useState(false);
	const [ product, setProduct] = useState<null|any>(null);

	useEffect(() => {
		const prod = products.find(prod => prod.id === productId);

		if(prod !== undefined)
			setProduct(prod);

	}, []);

	if(product === null)
		return <>carregando...</>;

	return (
		<>
			<Text variant='title-3' size='medium' weight='bolder'>{product.title}</Text>
			<div className='ProductDescription__content'>
				<Text variant='paragraph'>
					{product.description}
				</Text>
			</div>
			<Text variant='paragraph' weight='bolder'><strong>{product.price}</strong></Text>
			<Button onClick={() => setOpenModal(true)}>{data['controls.button.moredetails.label']}</Button>
			<Modal 
				open={openModal}
				title={data['controls.modal.products.title']}
				className='Modal--border'
			>

				<ProductDetails
					colors={product.colors} 
					img={product.img} 
					title={product.title} 
					description={product.description}
					price={product.price} 
					sizes={product.sizes} 
					sellBy={product.sellBy} 
					deliveredBy={product.deliveredBy}
				/>
			</Modal>	
		</>
	);
};

export default ProductDescription;