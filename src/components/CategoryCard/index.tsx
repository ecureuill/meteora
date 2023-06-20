import useMediaQueries from '../../hooks/useMediaQueries';
import './styles.css';

type CategoryCardProps = {
	img: string,
	caption: string
};

const CategoryCard = ({img, caption}: CategoryCardProps): JSX.Element => {
	
	const {isSmallVW} = useMediaQueries();

	const narrow = !isSmallVW? 'CategoryCard--narrow' : '';
	return (
		<figure className={`CategoryCard ${narrow}`}>
			<img src={img} alt='' className='CategoryCard__img'/>
			<figcaption className='CategoryCard__caption center'>
				{caption}
			</figcaption>
		</figure>
	);
};

export default CategoryCard;