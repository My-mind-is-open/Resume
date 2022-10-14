import React, { useContext, useState, useEffect } from 'react';
import EditBudget from './EditBudget';
import ViewBudget from './ViewBudget';

import { AppContext } from '../context/AppContext';

const Budget = () => {
	const { dispatch, budget } = useContext(AppContext)
	const [isEditing, setIsEditing] = useState(false);



	const handleEditClick = () => {
		setIsEditing(true);

	};


	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});

		setIsEditing(false);
	};

	useEffect(() => {
		const savedBudget = JSON.parse(
			localStorage.getItem('budget-data')
		);

		dispatch({
			type: "LOCAL_BUDGET",
			payload: savedBudget,
		})

	}, []);

	useEffect(() => {
		localStorage.setItem(
			'budget-data',
			JSON.stringify(budget)
		);
	}, [handleSaveClick])



	return (
		<div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	)
}

export default Budget;
