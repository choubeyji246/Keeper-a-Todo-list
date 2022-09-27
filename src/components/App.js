import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { useState } from "react";

function App() {
const [notes,setNotes]=useState([])

function addNote(newNote){
// console.log(newNote)
setNotes((prevNote)=>{
  return [...prevNote, newNote]
})

}
function deleteNote(id){
 setNotes((prevNotes)=>{
 return prevNotes.filter((note,index)=>{
  return id !== index
 });
 })

}

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
     { notes.map((noteItem,index)=>{
       return <Note key={index} 
                    id={index}
                   title={noteItem.title}
              content={noteItem.content}
               onDelete={deleteNote}     />
      })}
      <Footer />
    </div>
  );
}

export default App;
