// import CharacterData from "./CharacterData";
import Table from "react-bootstrap/Table";
// import CharacterDatabase from "./CharacterDatabase";

const characterDataTable = () => {
	return (
		<div>
			<Table striped bordered hover className="characterDataTable">
				<thead>
					<tr>
						<th>
							{/* <CharacterDatabase className="headers">headers</CharacterDatabase> */}
						</th>
						{/* <th>Name</th> */}
						{/* <th>Birthday</th>
						<th>Height</th>
						<th>Weight</th>
						<th>Homeworld</th>
						<th>Species</th> */}
					</tr>
				</thead>
				<tbody>
					<tr>{/* <CharacterData /> */}</tr>
				</tbody>
			</Table>
		</div>
	);
};

export default characterDataTable;
