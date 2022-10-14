import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';

const AddExpenseForm = () => {

	const { dispatch } = useContext(AppContext)
	const [name, setName] = useState('');
	const [cost, setCost] = useState('');

	const onSubmit = (event) => {

		event.preventDefault();

		const expenses = {
			id: uuidv4(),
			name: name,
			cost: parseInt(cost)
		};
		dispatch({
			type: 'ADD_EXPENSE',
			payload: expenses,
		});

		const newNote = [...notes, expenses]
		setNotes(newNote)

	}
	useEffect(() => {
		const savedNotes = JSON.parse(
			localStorage.getItem('react-notes-app-data')
		);

		dispatch({
			type: "LOCAL_STORAGE",
			payload: savedNotes,
		})
	}, []);

	useEffect(() => {
		localStorage.setItem(
			'react-notes-app-data',
			JSON.stringify(notes)
		);
	}, [onSubmit]);
	const [notes, setNotes] = useState([])

	return (
		<form onSubmit={onSubmit}>
			<div className='row'>
				<div className='col-sm col-lg-4'>
					<label htmlFor='name'>
						Name
					</label>
					<input value={name} onChange={(event) => {
						setName(event.target.value)
					}} type="text" required='required' className='form-control' id='name' />
				</div>
				<div className='col-sm col-lg-4'>
					<label htmlFor='name'>
						Cost
					</label>
					<input value={cost} onChange={(event) => {
						setCost(event.target.value)
					}} type="text" required='required' className='form-control' id='cost' />
				</div>
			</div>
			<div className='row mt-3'>
				<div className='col-sm'>
					<button type='submit' className='btn btn-primary'>Save</button>
				</div>
			</div>

		</form>
	)
}

export default AddExpenseForm;
