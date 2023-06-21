import { Button, Radio, Text } from '../.';
import data from '../../l10n/pt-BR.json';
import './styles.css';

type ProductDetailsProps = {
	img: string,
	title: string,
	description: string,
	price: string,
	colors: [{name: string, color: `#${string}${string}${string}${string}${string}${string}`}],
	sizes: string[],
	sellBy: string,
	deliveredBy: string,
}

const ProductDetails = ({img, title, description, price, colors, sizes, sellBy}: ProductDetailsProps): JSX.Element => {
	return (
		<div className='ProductDetails'>
			<figure className='ProductDetails__figure'>
				<img className='ProductDetails__img' src={img} alt=''/>
				<figcaption className='ProductDetails__figcaption'>
					<Text variant='title-2' size='medium' weight='bolder'>
						{title}
					</Text>
					<Text size='small'>
						{description}
					</Text>
				</figcaption>
			</figure>
			<div className='ProductDetails__selldetails'>
				<Text className='ProductDetails__price' variant='paragraph' size='large' weight='bold'>
					{price}
				</Text>
				<Text className='ProductDetails__sellby'  variant='paragraph' size='small'>
					{data['product-details.selledby']}
					{sellBy}
				</Text>
				<form className='ProductDetails__form'>
					<fieldset className='ProductDetails__RadioGroup'>
						<legend>
							<Text size='small' weight='bolder'>{data['product-details.colors']}</Text>
						</legend>
						{
							colors.map(option =>
								<Radio 
									name='colors'
									key={option.name}
									label={option.name}
									value={option.name}
									style={{
										backgroundColor: option.color
									}}
								/>
							)
						}
					</fieldset>
					<div className='ProductDetails__hr'/>
					<fieldset className='ProductDetails__RadioGroup'>
						<legend>

							<Text size='small' weight='bolder'>{data['product-details.sizes']}</Text>
						</legend>
						{
							sizes.map(option => 
								<Radio 
									name='sizes'
									key={option}
									label={option}
									value={option}
								/>
							)
						}
					</fieldset>
					<Button>{data['controls.button.product-details.label']}</Button>
				</form>
			</div>
		</div>
	);
};

export default ProductDetails;