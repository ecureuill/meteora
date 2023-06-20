import { Button, Text } from '../.';
import data from '../../l10n/pt-BR.json';
import './styles.css';

type ProductDescriptionProps = {
	title: string, 
	description: string,
	price: string,
};

const ProductDescription = ( {title, description, price}: ProductDescriptionProps): JSX.Element => {

	return (
		<>
			<Text variant='title-3' size='medium' weight='bolder'>{title}</Text>
			<div className='ProductDescription__content'>
				<Text variant='paragraph'>
					{description}
				</Text>
			</div>
			<Text variant='paragraph' weight='bolder'><strong>{price}</strong></Text>
			<Button>{data['controls.button.moredetails.label']}</Button>
		</>
	);
};

export default ProductDescription;