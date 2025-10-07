import NoteAddForm from './NoteAddForm'
import NoteList from './List'
function NoteSystem({notes , onSetNote}) {
  return (
    <>
        <div className="note-system">
        <NoteAddForm onSetNote = {onSetNote} />
        <NoteList notes={notes} onSetNote = {onSetNote}/>
        </div>
    </>
  )
}

export default NoteSystem