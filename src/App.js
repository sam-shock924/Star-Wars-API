import SearchBox from './Components/SearchBox';
import CharacterData from './Components/CharacterData';
import CharacterTable from './Components/CharacterTable';
import { useState } from 'react';

function App() {
	const [data, setData] = useState([
		{
			name: 'C-3PO',
			height: '167',
			mass: '75',
		},
		{
			name: 'Luke Skywalker',
			height: '172',
			mass: '77',
		},
	]);

	return (
		<div className='App'>
			<h1 className='title'>Character Archives</h1>
			<SearchBox />
			<CharacterData data={data} setData={setData} />
			<CharacterTable data={data} setData={setData} />
		</div>
	);
}

export default App;
