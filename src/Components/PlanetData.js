import axios from 'axios';
import {useEffect} from 'react';

const homeworldApiData = 'https://swapi.dev/api/planets/';

export default function PlanetData({setPlanets}) {
	useEffect(() => {
		axios
			.get(homeworldApiData)
			.then((response) => {
				console.log(response.data.results);
				return setPlanets(response.data.results);
			})
			.catch((error) => {
				console.log(error);
			});
	}, []);
}
