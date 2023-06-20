import './styles.css';
import data from '../../l10n/pt-BR.json';
import Text from '../Text';

const Footer = (): JSX.Element => {
	return (
		<footer className='Footer'>
			<small>
				<Text size='small'>
					{data['footer.develope_by']}
				</Text>
				<Text size='small'>
					{data['footer.project']}
				</Text>
			</small>
		</footer>
	);
};

export default Footer;