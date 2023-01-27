import SearchBox from './Components/SearchBox';
import CharacterTable from './Components/CharacterTable';
import {useState, useEffect} from 'react';
import {Pagination} from './Components/Pagination';
import axios from 'axios';

function App() {
	const [data, setData] = useState([]);
	// const [planets, setPlanets] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const dataPerPage = 5;

	const lastPostIndex = currentPage * dataPerPage;
	const firstPostIndex = lastPostIndex - dataPerPage;
	const currentData = data.slice(firstPostIndex, lastPostIndex);

	useEffect(() => {
		axios
			.get('https://swapi.dev/api/people/')
			.then((response) => {
				console.log(response.data.results);
				// create a for loop through each character.data
				//make http request for planet/species
				//update each character planet/species name
				setData(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	//SEE NOTES.TXT

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
