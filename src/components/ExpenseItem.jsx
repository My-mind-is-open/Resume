import React, { useContext } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';


const ExpenseItem = (props) => {


	const { dispatch } = useContext(AppContext);

	const handleDeleteExpense = () => {
		dispatch({
			type: 'DELETE_EXPENSE',
			payload: props.id,
		})
	}


	return (

		<li key={uuidv4} className='list-group-item d-flex justify-content-between align-items-center'>
			{
				props.name
			}
			<span className='badge bg-info badge-pill align-items-center d-flex justify-content-center  mr-3'>
				${props.cost}
				<MdDeleteForever onClick={handleDeleteExpense} size='1.5em' color="black"></MdDeleteForever>
			</span>
		</li>

	)
}

export default ExpenseItem;
