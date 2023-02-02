import SearchBox from './Components/SearchBox';
import CharacterTable from './Components/CharacterTable';
import {useState, useEffect} from 'react';
import {Pagination} from './Components/Pagination';
import axios from 'axios';

function App() {
	const characterURL = 'https://swapi.dev/api/people/';
	//state hooks
	const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(10);
	const [nextPage, setNextPage] = useState([]);

	//variables for pagination
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentData = data.slice(firstPostIndex, lastPostIndex);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	async function getCharacters() {
		try {
			const characterData = await axios.get(characterURL);
			console.log(characterData.data);
			console.log(characterData.data.next);

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
			setNextPage(characterData.data.next);
			// console.log(nextPage.data);
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
			<SearchBox />
			<CharacterTable data={currentData} />
			<Pagination
				getCharacters={getCharacters}
				totalPosts={data.length}
				dataPerPage={postsPerPage}
				data={data}
				setData={setData}
				paginate={paginate}
				nextPage={nextPage}
				setNextPage={setNextPage}
			/>
		</div>
	);
}

export default App;
