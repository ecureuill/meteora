import { useState } from 'react';
import { InputWithButton, Modal, Section, Text } from '../../components';
import data from '../../l10n/pt-BR.json';
import './styles.css';

const NewsLetterSection = (): JSX.Element => {
	const [openModal, setOpenModal] = useState(false);
	return (
		<Section title='' className='NewsLetterSection' >
			<div className='NewsLetterSection__content' >
				<Text>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</Text>
				<form onSubmit={(event) => {
					event.preventDefault();
					setOpenModal(true);
				}}>
					<InputWithButton
						label='Enviar'
						outlined='none'
						type='email'
						placeholder='Digite seu email'
						required={true}
					/>
				</form>
				<Modal title={data['feedback.email_registered.title']} open={openModal} setOpen={setOpenModal}>
					{data['feedback.email_registered.message']}
				</Modal>
			</div>
		</Section>
	);
};

export default NewsLetterSection;