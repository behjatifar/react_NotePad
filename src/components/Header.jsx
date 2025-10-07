function NoteHeader({notes , sortBy , onSetSortBy}) {
    return (
        
            <>
            <header className="header">
            <h1 className="header-title">My Notes ({notes.length})</h1>
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