import SearchBox from './Components/SearchBox';
import CharacterTable from './Components/CharacterTable';
import {useState, useEffect} from 'react';
import {Pagination} from './Components/Pagination';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const dataPerPage = 5;

	const lastPostIndex = currentPage * dataPerPage;
	const firstPostIndex = lastPostIndex - dataPerPage;
	const currentData = data.slice(firstPostIndex, lastPostIndex);

	useEffect(() => {
		async function getCharacters() {
			try {
				const characterData = await axios.get('https://swapi.dev/api/people/');
				console.log(characterData.data.results);

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
			} catch (error) {
				console.log(error);
			}
		}
		getCharacters();
	}, []);

	return (
		<div className='App'>
			<img src='/img/title-logo.png' alt='Star Wars' />
			<h1 className='title'>Character Archives</h1>
			<SearchBox />
			<CharacterTable data={currentData} />
			<Pagination
				totalPosts={data.length}
				dataPerPage={dataPerPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default App;
