import SearchBox from './Components/SearchBox';
import CharacterData from './Components/CharacterData';
import CharacterTable from './Components/CharacterTable';
import { useState } from 'react';
import { Pagination } from './Components/Pagination';

function App() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const dataPerPage = 15;

	const lastPostIndex = currentPage * dataPerPage;
	const firstPostIndex = lastPostIndex - dataPerPage;
	const currentData = data.slice(firstPostIndex, lastPostIndex);

	return (
		<div className='App'>
			<img src='/img/title-logo.png' alt='Star Wars' />
			<h1 className='title'>Character Archives</h1>
			<SearchBox />
			<CharacterData setData={setData} />
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
