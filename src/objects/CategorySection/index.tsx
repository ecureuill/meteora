import { CategoryCard, Section } from '../../components';
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
						<CategoryCard name={categ} img={require(`../../assets/categories/${categ}.png`)} caption={data[`categories.${categ}` as keyof object]} />
					</li>
				)}
			</ul>
		</Section>
	);
};

export default CategorySection;