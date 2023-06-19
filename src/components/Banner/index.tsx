import useMediaQueries from '../../hooks/useMediaQueries';
import './styles.css';

const Banner = (): JSX.Element => {

	const { isTinyVW, isSmallVW } = useMediaQueries();
	const screen = isTinyVW? 'mobile' : isSmallVW? 'tablet' : 'desktop';
	
	let img=`../../assets/banner/${screen}/${1}.png`;

	try {
		img = require(`../../assets/banner/${screen}/${1}.png`);
	}catch(error){
		console.error(error);
	}

	return (
		<figure className={'Banner'}>
			<img src={img} alt={''}  className={'Banner__img'}/>
		</figure>
	);
};

export default Banner;