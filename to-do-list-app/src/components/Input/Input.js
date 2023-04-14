import React from 'react';
import './Input.css';

export default function Input( props ) {

    return(
        <form onSubmit = {props.onFormSubmit}>
            <label htmlFor = "todo">Enter to-do:</label>
            <input type = "text" id = "todo" value = {props.entry} onChange = {props.onEntryChange}></input>
            <input type = "submit" value = "Add Todo"></input>
        </form>
    )
}
