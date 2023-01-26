import SearchBox from './Components/SearchBox';
import CharacterData from './Components/CharacterData';
import CharacterTable from './Components/CharacterTable';
import PlanetData from './Components/PlanetData';
import {useState} from 'react';
import {Pagination} from './Components/Pagination';

function App() {
	const [data, setData] = useState([]);
	const [planets, setPlanets] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const dataPerPage = 5;

	const lastPostIndex = currentPage * dataPerPage;
	const firstPostIndex = lastPostIndex - dataPerPage;
	const currentData = data.slice(firstPostIndex, lastPostIndex);

	return (
		<div className='App'>
			<img src='/img/title-logo.png' alt='Star Wars' />
			<h1 className='title'>Character Archives</h1>
			<SearchBox />
			<CharacterData setData={setData} />
			<PlanetData data={currentData} setPlanets={setPlanets} />
			<CharacterTable data={currentData} planetData={planets} />
			<Pagination
				totalPosts={data.length}
				dataPerPage={dataPerPage}
				setCurrentPage={setCurrentPage}
			/>
		</div>
	);
}

export default App;
