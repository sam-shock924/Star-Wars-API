import axios from 'axios';
import { useState, useEffect } from 'react';

let dataApi = 'https://swapi.dev/api/people/';

export default function CharacterData({ data, setData }) {
	useEffect(() => {
		axios
			.get(dataApi)
			.then((response) => {
				console.log(response.data.results);
				setData([response.data.results]);
			})
			.catch((error) => {
				console.log(error);
			});
	});

	return <div></div>;
}
