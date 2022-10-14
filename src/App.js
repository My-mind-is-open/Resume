import { useEffect } from 'react'
import { useState, } from 'react';
import NotesList from './components/NotesList';
import { nanoid } from 'nanoid';
import Search from './components/Search';
import Header from './components/Header';




const App = () => {


  const [notes, setNotes] = useState([]);

  const [searchText, setSearchText] = useState('');

  const [darkMode, setDarckMode] = useState(false);

  useEffect(() => {
    const savedNotes = JSON.parse(
      localStorage.getItem('react-notes-app-data')
    );

    if (savedNotes) {

      setNotes(savedNotes);

    }


  }, []);
  useEffect(() => {
    localStorage.setItem(
      'react-notes-app-data',
      JSON.stringify(notes)
    );
  }, [notes]);


  const addNote = (text) => {
    const date = new Date();

    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  }

  const deleteNote = (id) => {
    const newNotes = notes.filter((e) => e.id !== id)
    setNotes(newNotes)
  }

  console.log(notes)
  return (

    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
        <Header handlToggleDarckMode={setDarckMode} />
        <Search handleSearchNote={setSearchText} searchText={searchText} />
        <NotesList
          notes={notes.filter((note) => note.text.toLowerCase().includes(searchText)
          )}
          deleteNote={deleteNote}
          handleAddNotes={addNote} />
      </div>
    </div>

  )
}

export default App;
