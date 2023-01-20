const SearchBox = () => {
	return (
		<div className='search-box'>
			<input
				autoComplete='on'
				type='search'
				placeholder='Search the archives...'
				id='search'
			/>
			<button type='submit'>Search</button>
		</div>
	);
};

export default SearchBox;
