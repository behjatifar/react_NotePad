import { useState } from "react";

function NoteAddForm({onSetNote}) {
    const [ title , setTitle] = useState("");
    const [description , setDescription] = useState();
    const [error, setError] = useState("");
    const handleSubmitForm = (e) => {
     e.preventDefault();
     if(!title || title.trim().length < 3) {
            setError("نام یادداشت باید از ۳ حرف بیشتر باشد")
            return;
        }
        const newNote = {
            id:Date.now(),
            title,
            description,
            compeleted : false, 
            createdAt : new Date().toISOString()
        };
        onSetNote((preveNotes) => [...preveNotes,newNote]);
        setTitle("");
        setDescription("");
        setError("");
        }
  return (
    <section className="note-system_add">
    <h2 className="note-system_add-title">افزودن یاداشت جدید</h2>
    <form action="#" className="note-system_form" onSubmit={handleSubmitForm}>
        <input value={title} onChange={(e)=> setTitle(e.target.value)} type="text" className="note-system_form-title" placeholder="عنوان یاداشت"/>
        {error && <p className="error-message">{error}</p>}
        <input value={description} onChange={(e) => setDescription(e.target.value)} type="text" className="note-system_form-description" placeholder="توضیحات یاداشت"/>
        <input type="submit" className="note-system_form-submit" value="افزودن"/>
    </form>
    </section>
  )
}

export default NoteAddForm