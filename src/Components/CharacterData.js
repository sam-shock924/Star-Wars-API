import axios from 'axios';
import { useEffect, useState } from 'react';

const dataApi = 'https://swapi.dev/api/people/';

export default function CharacterData({ data, setData }) {
	useEffect(() => {
		// const [chars, setChars] = useState([]);
		axios
			.get(dataApi)
			.then((response) => {
				console.log(response.data.results);
				// setChars(response.data);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);

	// return <div>{data}</div>;
}
