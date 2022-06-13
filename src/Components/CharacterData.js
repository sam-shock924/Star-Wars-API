let characterData = "https://swapi.dev/api/people/";

export default function getCharacterData() {
	fetch(characterData)
		.then((response) => response.json())
		.then((data) => console.log(data));
}
