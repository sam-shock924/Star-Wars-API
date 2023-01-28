import SearchBox from './Components/SearchBox';
import CharacterTable from './Components/CharacterTable';
import {useState, useEffect} from 'react';
import {Pagination} from './Components/Pagination';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	const [planet, setPlanet] = useState([]);
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
				setData(characterData.data.results);

				for (const planet of characterData.data.results) {
					console.log(planet.homeworld);
					const planetName = await axios.get(planet.homeworld);
					console.log(planetName.data.name);
					setPlanet(planetName.data.name);
				}

				// const planetName = characterData.forEach((planet) => {
				// 	axios.get(characterData.data.results[planet].homeworld);
				// });

				// const planetData = await axios.get(
				// 	characterData.data.results[0].homeworld
				// );
				// console.log(planetName.data.name);
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
			<CharacterTable planet={planet} data={currentData} />
			<Pagination
				totalPosts={data.length}
				dataPerPage={dataPerPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default App;
