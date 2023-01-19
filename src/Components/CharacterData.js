import axios from 'axios';
import { useEffect } from 'react';

const dataApi = 'https://swapi.dev/api/people/';

export default function CharacterData({ data, setData }) {
	useEffect(() => {
		axios
			.get(dataApi)
			.then((response) => {
				console.log(response.data.results);
				return response.data.results;
			})
			.then((characters) => setData(characters))
			.catch((error) => {
				console.log(error);
			});
	}, []);
}
