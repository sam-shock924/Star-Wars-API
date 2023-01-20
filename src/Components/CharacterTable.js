import Table from 'react-bootstrap/Table';

const CharacterTable = ({ data }) => {
	const characterDataRow = data.map((character, index) => (
		<tr key={index}>
			<td>{character.name}</td>
			<td>{character.birth_year}</td>
			<td>{character.height}</td>
			<td>{character.mass}</td>
			<td>{character.homeworld}</td>
			<td>{character.species}</td>
		</tr>
	));

	return (
		<div>
			<Table striped bordered hover className='characterDataTable'>
				<thead>
					<tr>
						<th>Name</th>
						<th className='character-birth-year'>Birth Year*</th>
						<th>Height</th>
						<th>Mass</th>
						<th>Home World</th>
						<th>Species</th>
					</tr>
				</thead>
				<tbody>{characterDataRow}</tbody>
			</Table>
		</div>
	);
};

export default CharacterTable;

/* NOTES: 
- work on unique id keys for each td
- show BBY definition on hover for birth year
*/
