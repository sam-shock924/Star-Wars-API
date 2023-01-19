import axios from 'axios';
import { useEffect } from 'react';

const characterApiData = 'https://swapi.dev/api/people/';

export default function CharacterData({ setData }) {
	useEffect(() => {
		axios
			.get(characterApiData)
			.then((response) => {
				console.log(response.data);
				return response.data.results;
			})
			.then((characters) => setData(characters))
			.catch((error) => {
				console.log(error);
			});
	}, []);
}

/* NOTES: 
- if a planet or species has a API url, how do I call to it? what form of `if` statement should I use? (see notes.txt)
- 
*/
