import SearchBox from './Components/SearchBox';
import CharacterTable from './Components/CharacterTable';
import {useState, useEffect} from 'react';
import {Pagination} from './Components/Pagination';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	const [baseData, setBaseData] = useState([]);

	async function getCharacters() {
		try {
			const characterData = await axios.get('https://swapi.dev/api/people/');

			for (const character of characterData.data.results) {
				const planetName = await axios.get(character.homeworld);
				character.homeworldName = planetName.data.name;
			}

			for (const character of characterData.data.results) {
				const species = await axios.get(character.species);
				if (species.data.name === undefined) {
					character.species = 'Human';
				} else {
					character.species = species.data.name;
				}
			}

			setData(characterData.data.results);
			setBaseData(characterData.data.results);
			console.log(baseData);
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<div className='App'>
			<img src='/img/title-logo.png' alt='Star Wars' />
			<h1 className='title'>Character Archives</h1>
			<SearchBox
				setData={setData}
				data={data}
				setBaseData={setBaseData}
				baseData={baseData}
			/>
			<CharacterTable data={data} />
			<Pagination setData={setData} />
		</div>
	);
}

export default App;
