import { Banner, BenefitSection, CategorySection, NewsLetterSection, ProductSection } from '../../components';

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