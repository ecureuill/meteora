import data from '../../l10n/pt-BR.json';
import InputWithButton from '../InputWithButton';
import './styles.css';

const SearchBar = (): JSX.Element => {
	return (		
		<form className='SearchBar'>
			<InputWithButton 
				label={data['controls.button.search.label']}
				inputProps={{
					placeholder:data['controls.input.search.placeholder'], 
					type: 'search'
				}}
			/>
		</form>
	);
};

export default SearchBar;