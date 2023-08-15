import { useContext } from 'react';
import { InputWithButton } from '../../components';
import data from '../../l10n/pt-BR.json';
import './styles.css';
import { productContext } from '../../contexts/product.context';

type SearchBarProps = {
	variant?: 'zero'
}
const SearchBar = ({variant}: SearchBarProps): JSX.Element => {
	const {filterByName} = useContext(productContext);
	
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		const formData = new FormData(event.currentTarget);
		const name = formData.get('searchinput') as string;
		filterByName(name);
	};

	return (		
		<form className='SearchBar'
			onSubmit={handleSubmit}
		>
			<InputWithButton 
				label={data['controls.button.search.label']}
				outlined={variant? 'inverted-outlined' : 'outlined'}
				placeholder={data['controls.input.search.placeholder']}
				type='search'
				name='searchinput'
			/>
		</form>
	);
};

export default SearchBar;