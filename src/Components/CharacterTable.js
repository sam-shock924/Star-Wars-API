import CharacterData from "./CharacterData";
import Table from "react-bootstrap/Table";

const characterDataTable = () => {
	return (
		<Table striped bordered hover className="characterDataTable">
			<thead>
				<tr>
					<th>Name</th>
					<th>Birthday</th>
					<th>Height</th>
					<th>Weight</th>
					<th>Homeworld</th>
					<th>Species</th>
				</tr>
			</thead>
			<tbody>
				{CharacterData.map((character, index) => {
					return (
						<tr key={index}>
							<td>{character.name}</td>
							<td>{character.birth_year}</td>
							<td>{character.height}</td>
							<td>{character.mass}</td>
							<td>{character.homeworld}</td>
							<td>{character.species}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};

export default characterDataTable;
