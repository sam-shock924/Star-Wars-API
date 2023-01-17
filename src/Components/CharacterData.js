import axios from 'axios';
import { useEffect } from 'react';

const dataApi = 'https://swapi.dev/api/people/';

export default function CharacterData({ data, setData }) {
	useEffect((setData) => {
		axios
			.get(dataApi)
			.then((response) => response.json())
			.then((json) => setData(json))
			.catch((error) => {
				console.log(error);
			});
	}, []);
}
