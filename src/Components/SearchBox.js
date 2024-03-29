import axios from 'axios';
import {useState} from 'react';

const SearchBox = ({baseData, setData}) => {
	const [search, setSearch] = useState('');
	const searchURL = 'https://swapi.dev/api/people/?search=';

	const searchData = (searchValue) => {
		setSearch(searchValue);
	};

	function checkInput(e) {
		if (e.target.value !== '') {
			searchData(e.target.value);
		} else if (e.target.value === '') {
			setData(baseData);
		}
	}

	async function searchCharacter() {
		try {
			const characterSearch = await axios.get(`${searchURL}+${search}`);
			for (const character of characterSearch.data.results) {
				const planetName = await axios.get(character.homeworld);
				character.homeworldName = planetName.data.name;
			}
			for (const character of characterSearch.data.results) {
				const species = await axios.get(character.species);
				if (species.data.name === undefined) {
					character.species = 'Human';
				} else {
					character.species = species.data.name;
				}
			}
			setData(characterSearch.data.results);
		} catch (err) {
			console.log(err);
		}
	}

	return (
		<div className='search-box'>
			<input
				autoComplete='on'
				type='search'
				placeholder='Search the archives...'
				id='search'
				onChange={checkInput}
			/>
			<button type='submit' onClick={searchCharacter}>
				Search
			</button>
		</div>
	);
};

export default SearchBox;
