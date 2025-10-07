import React from 'react'

function NoteStatus({notes}) {
   const CompletedNotes = notes.filter(note => note.completed == true);
   const OpenNotes = notes.length - CompletedNotes.length;
  return (
    <ul className="note-system_status-list">
    <li className="note-system_status-item">همه <span className="note-system_status-badge">{notes.length}</span></li>
    <li className="note-system_status-item">تکمیل شده <span className="note-system_status-badge">{CompletedNotes.length}</span></li>
    <li className="note-system_status-item">باز <span className="note-system_status-badge">{OpenNotes}</span></li>
</ul>
  )
}

export default NoteStatus