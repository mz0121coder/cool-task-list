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

	function handleTodoAdd(event) {
		event.preventDefault();
		// add the new entry
		setTodos([...todos, entry]);
		// then reset the input field
		setEntry('');
	}

	function clearTodos(){
		setTodos([]);
	}

	return (
		<main>
			<Input
				entry={entry}
				onEntryChange={handleEntryChange}
				onTodoAdd={handleTodoAdd}
				onClickClear = {clearTodos}
			/>
			<List todos={todos} />
		</main>
	);
}

export default App;
