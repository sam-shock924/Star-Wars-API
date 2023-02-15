const SearchBox = ({search, setSearch}) => {
	const searchData = (searchValue) => {
		setSearch(searchValue);
		console.log(searchValue);
	};

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

/* 

I need to create a search function:
	- User can type character information into search bar (name, species, planet)
	- Search button will trigger an event
	- Event:
		- Fetch all URL's
		- Map through each data set
		- When a match is found, update the setData state
		- Display just search results on setData update
	- I'll need a new state variable [search, setSearch]
	- Wrap the search variable in a useEffect so it only will change when the setSearch is updated
		- useEffect(() => , [search])
		- Use an if() statement to check if the search box is being changed
			- if(search !== 0) {
				//fetch the data//
			}

*/
