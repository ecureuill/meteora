import data from '../../l10n/pt-BR.json';
import InputWithButton from '../InputWithButton';
import './styles.css';

type SearchBarProps = {
	variant?: 'zero'
}
const SearchBar = ({variant}: SearchBarProps): JSX.Element => {
	return (		
		<form className='SearchBar'>
			<InputWithButton 
				label={data['controls.button.search.label']}
				outlined={variant? 'inverted-outlined' : 'outlined'}
				inputProps={{
					placeholder:data['controls.input.search.placeholder'], 
					type: 'search'
				}}
			/>
		</form>
	);
};

export default SearchBar;