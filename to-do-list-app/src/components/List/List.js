import React from 'react';
import './List.css';

export default function List(props) {
	return (
		<ul>
			{props.todos.map((todo, index) => (
				<li key={index}>{todo}</li>
			))}
		</ul>
	);
}
