import Carrossel from '../../components/Carrossel';
import useMediaQueries from '../../hooks/useMediaQueries';
import { BenefitSection, CategorySection, NewsLetterSection, ProductSection } from '../../objects';

const HomePage = (): JSX.Element => {
	const { isTinyVW, isSmallVW } = useMediaQueries();
	const screen = isTinyVW? 'mobile' : isSmallVW? 'tablet' : 'desktop';
	
	let img1;
	let img2;
	let img3;

	try {
		img1 = require(`../../assets/banner/${screen}/${1}.png`);
		img2 = require(`../../assets/banner/${screen}/${2}.png`);
		img3 = require(`../../assets/banner/${screen}/${3}.png`);
	}catch(error){
		console.error(error);
	}

	return (
		<>
			<Carrossel imgs={[img1, img2, img3]}/>
			<CategorySection />
			<ProductSection />
			<BenefitSection />
			<NewsLetterSection />
		</>
	);
};

export default HomePage;