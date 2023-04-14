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

	function handleRemoveItem(index) { //NEW
		const newItems = [...todos]; // create a copy of the items array
		newItems.splice(index, 1);   // remove the item at the specified index
		setTodos(newItems);          // update the state with the new array
	  }

	return (
		<main>
			<Input
				entry={entry}
				onEntryChange={handleEntryChange}
				onTodoAdd={handleTodoAdd}
				onClickClear = {clearTodos}
			/>
			<List 
				todos={todos} 
				toRemoveItem = {handleRemoveItem} //NEW
			/>
		</main>
	);
}

export default App;
