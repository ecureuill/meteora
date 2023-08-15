import { useContext } from 'react';
import useMediaQueries from '../../hooks/useMediaQueries';
import Button from '../Button';
import './styles.css';
import { productContext } from '../../contexts/product.context';

type CategoryCardProps = {
	img: string,
	caption: string,
	name: string,
};

const CategoryCard = ({img, caption, name}: CategoryCardProps): JSX.Element => {
	
	const { filterByCategory } = useContext(productContext);
	const {isSmallVW} = useMediaQueries();
	const narrow = !isSmallVW? 'CategoryCard--narrow' : '';
	return (
		<Button className='CategoryCard__button' onClick={() => filterByCategory(name)}>
			<figure className={`CategoryCard ${narrow}`}>
				<img src={img} alt='' className='CategoryCard__img'/>
				<figcaption className='CategoryCard__caption center'>
					{caption}
				</figcaption>
			</figure>
		</Button>
	);
};

export default CategoryCard;