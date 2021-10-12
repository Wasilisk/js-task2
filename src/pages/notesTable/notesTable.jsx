import {useState} from "react";
import {connect} from "react-redux";
import TableRow from "./tableRow";
import { MdArchive, MdUnarchive, MdDelete } from "react-icons/md";

const NotesTable = (props) => {
    const [showArchive, setShowArchive] = useState(false)

    const tableRows = (tableType) => props.notes.map((note, index) => {
        if(note.archived === tableType) {
            return <TableRow key={index} note={note} noteId={index}/>
        }
    })

    return (
        <ul className="responsive-table" id="notesTable">
            <li className="table-header">
                <div className="col col-1">Name</div>
                <div className="col col-2">Created</div>
                <div className="col col-3">Category</div>
                <div className="col col-4">Content</div>
                <div className="col col-5">Dates</div>
                <div className="col col-6">
                    {
                        showArchive ?
                        <i onClick={() => setShowArchive(false)}><MdArchive/></i> :
                        <i onClick={() => setShowArchive(true)}><MdUnarchive/></i>
                    }
                    <i><MdDelete/></i>
                </div>
            </li>
            {tableRows(showArchive)}
        </ul>

    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}
export default connect(mapStateToProps)(NotesTable);