function AddForm() {
  return (
    <section className="note-system_add">
      <h2 className="note-system_add-title">Add New Note</h2>
      <form action="#" className="note-system_form">
        <input
          type="text"
          className="note-system_form-title"
          placeholder="Note title"
        />
        <input
          type="text"
          className="note-system_form-description"
          placeholder="Note Description"
        />
        <input
          type="submit"
          className="note-system_form-submit"
          value="Add a new Note"
        />
      </form>
    </section>
  );
}

export default AddForm;
