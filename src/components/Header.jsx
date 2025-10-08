function NoteHeader({notes , sortBy , onSetSortBy}) {
    return (
        
            <>
            <header className="header">
                <h1>
  اپلیکیشن دست‌نوشته من توسعه داده شده با ❤️ در دانشکده فنی پسران
  <img
    src="../../public/NUS.png"
    alt="NUS Logo"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",   // makes it a perfect circle
      marginLeft: "10px",
      verticalAlign: "middle" // keeps it aligned nicely with the text
    }}
  />
  <img
    src="../../public/images.png"
    alt="Another Logo"
    style={{
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      marginLeft: "10px",
      verticalAlign: "middle",
    }}
  />
</h1>

            <h1 className="header-title">یاداشت های من ({notes.length})</h1>
            <select value={sortBy} onChange={onSetSortBy} name="#" id="" className="header-sort">
                <option value="latest" className="header-sort_item">مرتب سازی بر اساس یاداشت های آخر</option>
                <option value="earliset" className="header-sort_item">مرتب سازی بر اساس یاداشت های جدید</option>
                <option value="completed" className="header-sort_item">مرتب سازی براساس یاداشت های کامل شده</option>
            </select>
            </header>
            </>
      
    )
}
export default NoteHeader