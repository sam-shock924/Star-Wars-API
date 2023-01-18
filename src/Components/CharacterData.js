import axios from 'axios';
import { useEffect } from 'react';

const dataApi = 'https://swapi.dev/api/people/';

export default function CharacterData({ data, setData }) {
	useEffect(() => {
		axios
			.get(dataApi)
			.then((response) => console.log(response.data.results))
			.then((response) => setData(response.data.results))
			.catch((error) => {
				console.log(error);
			});
	}, []);
}
