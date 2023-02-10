import NotesList from "./components/NotesList";
import { useState } from "react";
import {nanoid} from 'nanoid';
import AddNote from "./components/AddNotes";
import Search from "./components/Search";
import Header from "./components/Header";

const App = () => {
  const[notes,setNotes] = useState([{
        id :  nanoid(),
        text:"This is my first note !",
        date: "7/02/2023",
  },
  {
    id :  nanoid(),
    text:"This is my second note !",
    date: "8/02/2023",
},
{
  id :  nanoid(),
  text:"This is my third note !",
  date: "9/02/2023",
},
{
  id :  nanoid(),
  text:"This is my fourth note !",
  date: "10/02/2023",
},
]);
const [searchText,setSearchText] = useState('');

 const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id : nanoid(),
      text : text,
      date : date.toLocaleDateString,
    }
    const newNotes = [...notes,newNote];
    setNotes(newNotes)
 }; 
 const deleteNote = (id) => {
    const newNotes = notes.filter((note) => note.id !== id);
    setNotes(newNotes);
 }
  return ( <div className="container">
    <Header/>
    <Search handleSearchNote = {setSearchText}/>
    <NotesList notes={notes.filter((note)=> note.text.toLowerCase().includes(searchText))} handleAddNote={addNote} handleDeleteNote={deleteNote}/>
  </div> );
};

export default App;