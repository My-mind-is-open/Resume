
import React from 'react';
import { useState } from 'react';
import '../scss/AddNotes.scss';

const AddNotes = ({ handleAddNotes }) => {

	const [noteText, setnoteText] = useState('');
	const characterLimit = 200;


	const handleChange = (event) => {
		if (characterLimit - event.target.value.length >= 0) {
			setnoteText(event.target.value);
		}

	}
	const handleSaveClick = () => {
		if (noteText.trim().length > 0) {
			handleAddNotes(noteText);
			setnoteText('');
		}


	}


	return (
		<div className='note new'>
			<textarea className='area' value={noteText}
				onChange={handleChange}
				cols="10"
				rows="8"
				placeholder='Add new note...'></textarea>
			<div className='note-footer'>
				<small>{characterLimit - noteText.length} remaning</small>
				<button className='save' onClick={handleSaveClick}>Save</button>
			</div>
		</div>
	)
}

export default AddNotes;
