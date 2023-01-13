import CharacterData from './CharacterData';
import Table from 'react-bootstrap/Table';
import { useState } from 'react';

const CharacterDataTable = () => {
	// const [characterData, setCharacterData] = useState([]);
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
					<tr className='dataRow'></tr>
				</tbody>
			</Table>
		</div>
	);
};

export default CharacterDataTable;
