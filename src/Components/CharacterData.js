import axios from "axios";

let characterData = "https://swapi.dev/api/people/";

export function getCharacterData() {
	axios
		.get(characterData)
		.then((response) => {
			console.log(response.data);
		})
		.catch((error) => {
			console.log(error);
		});
}
