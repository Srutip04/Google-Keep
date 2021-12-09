import react, { useState } from 'react';
import logo from './logo.svg';
import Header from './components/header/header';
import Note from './components/note/note';
import Footer from './components/footer/footer';
import CreateArea from './components/create-area/createarea';

import './App.css';

function App() {
  
  const [notes, setNotes] =  useState([]);

   function addNote(newNote) {
     setNotes((prevNotes) => {
       return [...prevNotes, newNote];
     });
   }

   function deleteNote(id) {
     setNotes((prevNotes) => {
       return prevNotes.filter((noteItem, index) => {
         return index !== id;
       });
     });
   }

  return (
    <div className="App">
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem,index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
