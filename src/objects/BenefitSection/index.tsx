import './styles.css';
import data from '../../l10n/pt-BR.json';
import { Card, Section, Text } from '../../components';

const BenefitSection = (): JSX.Element => {
	return (
		<Section className='BenefitSection' title={data['sections.benefits.title']}>
			
			<Card img={require('../../assets/diamond.png')} direction='row'>
				<Text weight='bolder' className='BenefitSection__title'>{data['benefits.pix.title']}</Text>
				<Text className='BenefitSection__description'>{data['benefits.pix.description']}</Text>
			</Card>

			<Card img={require('../../assets/arrow-repeat.png')} direction='row'>
				<Text weight='bolder' className='BenefitSection__title'>{data['benefits.replace.title']}</Text>
				<Text className='BenefitSection__description'>{data['benefits.replace.description']}</Text>
			</Card>

			<Card img={require('../../assets/flower.png')} direction='row'>
				<Text weight='bolder' className='BenefitSection__title'>{data['benefits.sustentability.title']}</Text>
				<Text className='BenefitSection__description'>{data['benefits.sustentability.description']}</Text>
			</Card>

		</Section>
	);
};

export default BenefitSection;