import SearchBox from './Components/SearchBox';
import CharacterData from './Components/CharacterData';
import CharacterTable from './Components/CharacterTable';
import { useState } from 'react';

function App() {
	const [data, setData] = useState([]);

	return (
		<div className='App'>
			<img src='/img/title-logo.png' alt='' />
			<h1 className='title'>Character Archives</h1>
			<SearchBox />
			<CharacterData data={data} setData={setData} />
			<CharacterTable data={data} setData={setData} />
		</div>
	);
}

export default App;
