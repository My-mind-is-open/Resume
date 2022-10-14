import React from 'react';
import Note from './Note';
import AddNotes from './AddNotes';
import "../scss/NotesList.scss";

const NotesList = ({ notes, handleAddNotes, deleteNote }) => {
	return (
		<div className='notes-list'>
			{notes.map((note) => <Note deleteNote={deleteNote} key={note.id} id={note.id} text={note.text} date={note.date} />)}
			<AddNotes handleAddNotes={handleAddNotes} />
		</div>
	)
}

export default NotesList
