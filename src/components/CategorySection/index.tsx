import { Link } from 'react-router-dom';
import { CategoryCard, Section } from '../.';
import data from '../../l10n/pt-BR.json';
import './styles.css';

const CategorySection = (): JSX.Element => {
	const categories = [
		'bags',
		'pants',
		'shoes',
		'tshirts',
		'jackets',
		'glasses',
	];

	return (
		<Section title={data['sections.category.title']}>
			<ul className='CategorySection'>
				{categories.map(categ => 
					<li key={categ}>
						<Link to={`/category/${categ}`}>
							<CategoryCard img={require(`../../assets/categories/${categ}.png`)} caption={data[`categories.${categ}` as keyof object]} />
						</Link>
					</li>
				)}
			</ul>
		</Section>
	);
};

export default CategorySection;