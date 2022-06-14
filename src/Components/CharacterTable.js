import CharacterData from "./CharacterData";
import Table from "react-bootstrap/Table";

const characterDataTable = () => {
	return (
		<div>
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
					<tr>
						{/* <CharacterData /> */}
						<td>luke</td>
						<td>never</td>
						<td>5'1"</td>
						<td>155lb</td>
						<td>earth</td>
						<td>human</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default characterDataTable;
