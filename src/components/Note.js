import React from 'react';
import { MdDeleteForever } from 'react-icons/md';
import '../scss/Note.scss';



const Note = ({ deleteNote, id, text, date }) => {




	return (
		<div className='note' key={id + 1}>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDeleteForever onClick={() => deleteNote(id)} className='delete-icon' size='1.3em' />
			</div>
		</div>
	)
}

export default Note;
