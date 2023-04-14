import React, { useState } from 'react';
import './App.css';
import List from '../List/List.js';
import Input from '../Input/Input.js';

function App() {
	const [todos, setTodos] = useState([]);
	const [entry, setEntry] = useState('');

	function handleEntryChange(event) {
		setEntry(event.target.value);
	}

	function handleFormSubmit(event) {
		event.preventDefault();
		// add the new entry
		setTodos([...todos, entry]);
		// then reset the input field
		setEntry('');
	}

	return (
		<main>
			<Input
				entry={entry}
				onEntryChange={handleEntryChange}
				onFormSubmit={handleFormSubmit}
			/>
			<List todos={todos} />
		</main>
	);
}

export default App;
