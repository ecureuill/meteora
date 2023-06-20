import {InputWithButton, Section, Text} from '../.';
import './styles.css';

const NewsLetterSection = (): JSX.Element => {
	return (
		<Section title='' className='NewsLetterSection' >
			<div className='NewsLetterSection__content' >
				<Text>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</Text>
				<InputWithButton
					label='Enviar'
					outlined='none'
					inputProps={{
						type:'email',
						placeholder:'Digite seu email'
					}}	 
				/>
			</div>
		</Section>
	);
};

export default NewsLetterSection;