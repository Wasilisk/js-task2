
const activeNotesTable = () => {
    return (
        <ul className="responsive-table" id="notesTable">
            <li className="table-header">
                <div className="col col-1">Name</div>
                <div className="col col-2">Created</div>
                <div className="col col-3">Category</div>
                <div className="col col-4">Content</div>
                <div className="col col-5">Dates</div>
                <div className="col col-6">
                    <i className="large material-icons">archive</i>
                    <i className="large material-icons">delete</i>
                </div>
            </li>
        </ul>
    )
}
export default activeNotesTable;