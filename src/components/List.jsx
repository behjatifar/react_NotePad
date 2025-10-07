import NoteStatus from './Status'
function NoteList({notes, onSetNote}){
    const handleDeleteNote = (noteId) => {
        const filteredNotes = notes.filter (note => note.id !== noteId);
        onSetNote(filteredNotes);
    }
    const handleChangeStatus = (noteId)=> {
        const newNotes = notes.map((note) => note.id == noteId ? {...note,completed:!note.completed}:note)
        onSetNote(newNotes)
    }
    return (
        <section className='note-system_content'>
        <NoteStatus notes={notes}/>
        {notes.map((note)=>(<NoteItem key={note.id} note={note} OnDeleteNote = {handleDeleteNote} onChangeStatus = {handleChangeStatus}/>))}
        </section>
    )
}


export default NoteList
function NoteItem({note , OnDeleteNote , onChangeStatus})
{
    const options = {
        day : "numeric",
        month : "short",
        year : "numeric"
    }
    return (
        <section className="notes-list">
        <div className="note-list_item">
            <h3 className="note-list_item-title">{note.title}</h3>
            <div className="note-list_item-info">
                <p className="note-list_item-description">{note.description}</p>
                <div className="note-list_item-features">
                    <span className="note-list_item-delete" onClick={()=>OnDeleteNote(note.id)}>❌</span>
                    <input type="checkbox" className="note-list_item-check" checked={note.completed} onClick={()=>onChangeStatus(note.id)}/>
                </div>
            </div>
            <div className="note-list_item-date">
                {new Date(note.createdAt).toLocaleDateString("en-US" , options)}
            </div>
        </div>
    </section>  
    )
}