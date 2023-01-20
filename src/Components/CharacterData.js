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
