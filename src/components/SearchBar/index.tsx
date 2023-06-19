import { Button } from '../.';
import { Input } from '../.';
import './styles.css';

type SearchBarProps = {
	variant?: 'zero'
}

const SearchBar = ({variant}: SearchBarProps): JSX.Element => {
	return (		
		<form className='SearchBar'>
			<Input label='Pesquisar'/>
			<Button className={`SearchBar__button ${variant !== undefined? 'SearchBar__button--zero': ''}`} outlined='outlined'>Pesquisar</Button>
		</form>
	);
};

export default SearchBar;