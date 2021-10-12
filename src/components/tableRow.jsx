import { MdArchive, MdUnarchive, MdDelete} from "react-icons/md";
import { deleteNote, archiveNote, unarchiveNote } from '../redux/notesSlice'
import {connect} from "react-redux";
import EditNote from "../pages/editNotes/editNote";
import {noteIcon} from "../utils/noteIcon";

const TableRow = (props) => {
    return (
        <li className="table-row active-notes">
            <div className="col col-1">
                {noteIcon(props.note.category)}
                {props.note.name}
            </div>
            <div className="col col-2">{props.note.created}</div>
            <div className="col col-3">{props.note.category}</div>
            <div className="col col-4">{props.note.content}</div>
            <div className="col col-5">{props.note.dates}</div>
            <div className="col col-6">
                <EditNote note={props.note} noteId={props.noteId}/>
                {
                    props.note.archived ?
                        <i className="note-icon" onClick={()=> props.unarchiveNote(props.noteId)}><MdUnarchive/></i> :
                        <i className="note-icon" onClick={()=> props.archiveNote(props.noteId)}><MdArchive/></i>
                }
                <i className="note-icon" onClick={()=> props.deleteNote(props.noteId)}><MdDelete/></i>
            </div>
        </li>
    )
}

export default connect(null, { deleteNote, archiveNote, unarchiveNote})(TableRow);