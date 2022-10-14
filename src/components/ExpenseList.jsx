import React, { useContext } from 'react';
import ExpenseItem from './ExpenseItem';
import { AppContext } from '../context/AppContext';
import { v4 as uuidv4 } from 'uuid';



const ExpenseList = () => {
	const { expenses } = useContext(AppContext);
	return (
		<ul key={uuidv4} className='list-group'>
			{expenses.map((expenses) => (
				<ExpenseItem id={expenses.id}
					name={expenses.name}
					cost={expenses.cost} />
			))}
		</ul>
	)
}

export default ExpenseList;
