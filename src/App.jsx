import { useState } from "react";

function App(){
  const [notes,setNotes] = useState([]);
  const [sortBy , setSortBy] = useState("latest");
  const handleChangeSortBy = (e) => {
    setSortBy(e.target.value);
  }
  let sortedNotes = notes;
  switch(sortedNotes) {
    case "earliest": {
      sortedNotes = [...notes].sort(
      (a,b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
    break;
    }
    case "latest" : {
      sortedNotes = [...notes].sort(
        (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
    case "latest": {
      sortedNotes = [...notes].sort(
        (a,b) => new Date(b.createdAt) - new Date(a.createdAt)
      );
    }
  }
  if(sortBy == "earliset"){
    sortedNotes = [...notes].sort(
      (a,b) => new Date(a.createdAt) - new Date(b.createdAt)
    );
  }
  if()
}