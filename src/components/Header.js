import React from 'react';
import '../scss/Header.scss';


const Header = ({ handlToggleDarckMode }) => {



	return (
		<header className='header'>
			<h1>Notes</h1>
			<button onClick={() =>
				handlToggleDarckMode(
					(previousDarkMode) => !previousDarkMode
				)
			} className='save'>Toggle Mode</button>
		</header>
	)
}

export default Header
