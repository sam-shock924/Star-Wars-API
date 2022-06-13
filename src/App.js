import SearchBox from "./Components/SearchBox";
// import CharacterData from "./Components/CharacterData";
import CharacterTable from "./Components/CharacterTable";

function App() {
	return (
		<div className="App">
			<h1 className="title">Character Archives</h1>
			<SearchBox />
			{/* <CharacterData /> */}
			<CharacterTable />
		</div>
	);
}

export default App;
