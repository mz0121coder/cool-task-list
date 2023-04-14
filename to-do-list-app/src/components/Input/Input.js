import React from 'react';
import './Input.css';

export default function Input(props) {
	return (
		<div>
			<label htmlFor='todo'>Enter to-do: </label>
			<input
				type='text'
				id='todo'
				value={props.entry}
				onChange={props.onEntryChange}></input>
			<button onClick={props.onTodoAdd}> Add Todo</button>
			<button onClick={props.onClickClear}>Clear List</button>
		</div>
	);
}
