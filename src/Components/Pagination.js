import axios from 'axios';

export const Pagination = ({setData, totalPosts, dataPerPage}) => {
	let pageNumber = [];

	for (let i = 1; i <= Math.ceil(totalPosts / dataPerPage); i++) {
		pageNumber.push(i);
	}

	const page1 = `https://swapi.dev/api/people/?page=1`;
	const page2 = `https://swapi.dev/api/people/?page=2`;
	const page3 = 'https://swapi.dev/api/people/?page=3';
	const page4 = 'https://swapi.dev/api/people/?page=4';
	const page5 = 'https://swapi.dev/api/people/?page=5';
	const page6 = 'https://swapi.dev/api/people/?page=6';
	const page7 = 'https://swapi.dev/api/people/?page=7';
	const page8 = 'https://swapi.dev/api/people/?page=8';
	const page9 = 'https://swapi.dev/api/people/?page=9';

	//just to make it work. needs hella refactoring
	async function newPage1() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page1);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage2() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page2);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage3() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page3);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage4() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page4);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage5() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page5);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage6() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page6);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage7() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page7);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage8() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page8);

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
		} catch (error) {
			console.log(error);
			console.log('Something went wrong...oops');
		}
	}

	async function newPage9() {
		console.log('clicked page');
		try {
			const characterData = await axios.get(page9);

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
						<button id={page} className='page-buttons' onClick={newPage1}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage2}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage3}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage4}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage5}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage6}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage7}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage8}>
							{page++}
						</button>
						<button id={page} className='page-buttons' onClick={newPage9}>
							{page++}
						</button>
					</div>
				);
			})}
		</div>
	);
};
