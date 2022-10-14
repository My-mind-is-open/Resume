import React, { useState, useEffect } from 'react';

const EditBudget = (props) => {
	const [value, setValue] = useState(props.budget);





	const changeBufget = (value) => {
		props.handleSaveClick(value);

	}
	return (
		<>
			<input
				required='required'
				type='number'
				className='form-control mr-3'
				id='name'
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button
				type='button'
				className='btn btn-primary'
				onClick={() => changeBufget(value)}
			>
				Save
			</button>
		</>
	);
};

export default EditBudget;