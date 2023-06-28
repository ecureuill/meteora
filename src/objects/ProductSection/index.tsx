import { ProductDescription } from '../.';
import { Card, Section } from '../../components';
import data from '../../l10n/pt-BR.json';
import { products } from '../../services/products';
import './styles.css';

const ProductSection = (): JSX.Element => {

	return (
		<Section title={data['sections.hotdeals.title']}>
			<div className='ProductSection'>
				{products.map(prod => 
					<Card
						key={prod.id}
						img={prod.img}
					>
						<ProductDescription
							productId={prod.id}
						/>
					</Card>

				)}
			</div>
		</Section>
	);
};

export default ProductSection;