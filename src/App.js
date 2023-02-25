import SearchBox from './Components/SearchBox';
import CharacterTable from './Components/CharacterTable';
import {useState, useEffect} from 'react';
import {Pagination} from './Components/Pagination';
import axios from 'axios';

function App() {
	//state hooks
	const [data, setData] = useState([]);
	// const [loading, setLoading] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(100);
	const [page, setPage] = useState(1);

	//variables for pagination
	const lastPostIndex = currentPage * postsPerPage;
	const firstPostIndex = lastPostIndex - postsPerPage;
	const currentData = data.slice(firstPostIndex, lastPostIndex);
	const paginate = (pageNumber) => setCurrentPage(pageNumber);
	async function getCharacters() {
		try {
			const characterData = await axios.get('https://swapi.dev/api/people/');
			// console.log(characterData.data.results);

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
			<SearchBox data={data} setData={setData} page={page} setPage={setPage} />
			<CharacterTable data={data} />
			<Pagination
				totalPosts={data.length}
				dataPerPage={postsPerPage}
				setData={setData}
				paginate={paginate}
			/>
		</div>
	);
}

export default App;
