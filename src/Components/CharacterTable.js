import Table from 'react-bootstrap/Table';

const CharacterTable = ({ data, setData }) => {
	return (
		<div>
			<Table striped bordered hover className='characterDataTable'>
				<thead>
					<tr>
						<th>Name</th>
						<th>Birth Date</th>
						<th>Height</th>
						<th>Mass</th>
						<th>Home World</th>
						<th>Species</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<div>
							{data.map((character) => (
								<div>
									<div>
										<td>{character.name}</td>
									</div>
									<div>
										<td>{character.height}</td>
									</div>
									<div>
										<td>{character.mass}</td>
									</div>
								</div>
							))}
						</div>
					</tr>

					{/* <tr>
						<td>{props.data.name}</td>
						<td>01/01/01</td>
						<td>{props.height}</td>
						<td>{props.mass}</td>
						<td>Home World</td>
						<td>Species</td>
					</tr> */}
				</tbody>
			</Table>
		</div>
	);
};

export default CharacterTable;
