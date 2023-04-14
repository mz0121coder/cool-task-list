import React, {useState} from 'react';
import './App.css';
import List from '../List/List.js';
import Input from '../Input/Input.js';

function App() {
	const [todos, setTodos] = useState([]); 
	const [entry, setEntry] = useState("");

	function handleEntryChange(event) {
			setEntry(event.target.value);
	}
// 	function handleFormSubmit(event) {
// 		;
// }
// onFormSubmit = {handleFormSubmit}
	return (
		<main>
			<Input entry = {entry} onEntryChange = {handleEntryChange} /> 
		</main>
	);
}

export default App;
