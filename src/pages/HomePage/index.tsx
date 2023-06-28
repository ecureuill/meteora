import { Banner } from '../../components';
import { BenefitSection, CategorySection, NewsLetterSection, ProductSection } from '../../objects';

const HomePage = (): JSX.Element => {
	return (
		<>
			<Banner />
			<CategorySection />
			<ProductSection />
			<BenefitSection />
			<NewsLetterSection />
		</>
	);
};

export default HomePage;