import axios from 'axios';
import {useState, useEffect} from 'react';

const SearchBox = ({data, setData, filterData, setFilterData}) => {
	const [search, setSearch] = useState('');
	// const searchData = (searchValue) => {
	// 	setSearch(searchValue);
	// 	if (searchValue !== '') {
	// 		const filteredData = data.filter((item) => {
	// 			return Object.values(item)
	// 				.join(' ')
	// 				.toLowerCase()
	// 				.includes(searchValue.toLowerCase());
	// 		});
	// 		console.log(filteredData);
	// 		setSearch(filteredData);
	// 		console.log(search);
	// 		setFilterData(filteredData);
	// 	} else {
	// 		console.log(searchValue);
	// 		setFilterData(data);
	// 	}
	// };

	// async function findCharacter() {
	// 	const searchedCharacter = await axios.get(
	// 		`https://swapi.dev/api/people/?search=${searchValue}`
	// 	);
	// }

	const searchData = (searchValue) => {
		setSearch(searchValue);
		console.log(searchValue);
	};

	// async function findCharacter(searchData) {
	// 	try {
	// 		const searchedCharacter = await axios.get(
	// 			`https://swapi.dev/api/people/?search=${searchData}`
	// 		);
	// 		setData(searchedCharacter);
	// 		console.log(searchedCharacter);
	// 	} catch (err) {
	// 		console.log(err);
	// 	}
	// }

	// findCharacter();
	// useEffect(() => {
	// 	findCharacter();
	// }, []);

	// const searchData = (searchValue) => {
	// 	setSearch(searchValue);
	// 	// findCharacter();
	// 	async function findCharacter() {
	// 		const searchedCharacter = await axios.get(
	// 			`https://swapi.dev/api/people/?search=${searchValue}`
	// 		);
	// 		console.log(searchedCharacter);
	// 	}
	// 	if (searchValue !== '') {
	// 		findCharacter();
	// 	} else {
	// 		return;
	// 	}
	// 	console.log(searchValue);
	// };

	return (
		<div className='search-box'>
			<input
				autoComplete='on'
				type='search'
				placeholder='Search the archives...'
				id='search'
				onChange={(e) => searchData(e.target.value)}
			/>
			<button type='submit'>Search</button>
		</div>
	);
};

export default SearchBox;
