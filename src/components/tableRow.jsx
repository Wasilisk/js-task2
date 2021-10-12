import { MdModeEditOutline, MdArchive, MdUnarchive, MdDelete, MdEventNote, MdLightbulb, MdLocationPin } from "react-icons/md";
import { deleteNote, archiveNote, unarchiveNote } from '../../store/notesSlice'
import {connect} from "react-redux";

const TableRow = (props) => {
    const noteIcon = (category) => {
        switch (category) {
            case 'Task':
                return <i><MdEventNote/></i>
            case 'Random Thought':
                return <i><MdLocationPin/></i>
            case "Idea":
                return <i><MdLightbulb/></i>
        }
    }
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
                <i><MdModeEditOutline/></i>
                {
                    props.note.archived ?
                        <i onClick={()=> props.unarchiveNote(props.noteId)}><MdUnarchive/></i> :
                        <i onClick={()=> props.archiveNote(props.noteId)}><MdArchive/></i>
                }
                <i onClick={()=> props.deleteNote(props.noteId)}><MdDelete/></i>
            </div>
        </li>
    )
}

export default connect(null, { deleteNote, archiveNote, unarchiveNote})(TableRow);