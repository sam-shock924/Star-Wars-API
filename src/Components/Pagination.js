import axios from 'axios';

export const Pagination = ({
	data,
	setData,
	totalPosts,
	dataPerPage,
	nextPage,
	paginate,
	getCharacters,
}) => {
	let pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / dataPerPage); i++) {
		pageNumber.push(i);
	}

	//not really working UGH
	async function getNewPage() {
		console.log('clicked second page');
		try {
			const characterData = await axios.get(
				'https://swapi.dev/api/people/?page=2'
			);
			console.log(characterData.data);
			console.log(characterData.data.next);

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
			// setNextPage(characterData.data.next);
			// console.log(nextPage.data);
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	return (
		<div>
			{pageNumber.map((page) => {
				return (
					<div>
						<button id={page} className='page-buttons' onClick={getNewPage}>
							1
						</button>
						<button id={page} className='page-buttons' onClick={getNewPage}>
							2
						</button>
						<button id={page} className='page-buttons'>
							3
						</button>
						<button id={page} className='page-buttons'>
							4
						</button>
						<button id={page} className='page-buttons'>
							5
						</button>
						<button id={page} className='page-buttons'>
							6
						</button>
						<button id={page} className='page-buttons'>
							7
						</button>
					</div>
				);
			})}
		</div>
	);
};
