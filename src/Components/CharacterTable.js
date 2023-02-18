import Table from 'react-bootstrap/Table';

const CharacterTable = ({data, loading, search, filterData}) => {
	let characterDataRow = null;

	// eslint-disable-next-line no-lone-blocks
	{
		search.length > 1
			? (characterDataRow = filterData.map((character, index) => (
					<tr /*key={index}*/>
						<td>{character.name}</td>
						<td>{character.birth_year}</td>
						<td>{character.height}cm</td>
						<td>{character.mass}g</td>
						<td>{character.homeworldName}</td>
						<td>{character.species}</td>
					</tr>
			  )))
			: (characterDataRow = data.map((character, index) => (
					<tr /*key={index}*/>
						<td>{character.name}</td>
						<td>{character.birth_year}</td>
						<td>{character.height}cm</td>
						<td>{character.mass}g</td>
						<td>{character.homeworldName}</td>
						<td>{character.species}</td>
					</tr>
			  )));
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
	}
};
export default CharacterTable;
