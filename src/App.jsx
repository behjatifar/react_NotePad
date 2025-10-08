import { useState } from "react";
import NoteHeader from './components/Header';
import NoteSystem from './components/System';
import NoteAddForm  from './components/NoteAddForm';

function App(){
  const [notes,setNotes] = useState([]);
  const [sortBy , setSortBy] = useState("latest");
  const handleChangeSortBy = (e) => {
    setSortBy(e.target.value);
  }
  let sortedNotes = notes;
  console.log(sortBy);
  switch(sortBy) {
    case "latest": {
      sortedNotes = [...notes].sort(
      (a,b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    break;
    }
    case "earliset" : {
      sortedNotes = [...notes].sort(
        (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
      break;
    }
    case "completed": {
      sortedNotes = [...notes].sort(
        (a,b) => Number(b.compeleted) - Number(a.compeleted)
      );
      break;
    }
  }  return (
    <>
    <NoteHeader notes={sortedNotes} sortBy={sortBy} onSetSortBy = {handleChangeSortBy}/>
    <NoteSystem notes ={sortedNotes} onSetNote = {setNotes}/>
    </>
  )
}
export default App