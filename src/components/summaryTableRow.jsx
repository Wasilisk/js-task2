import { MdEventNote, MdLightbulb, MdLocationPin } from "react-icons/md";
import {connect} from "react-redux";

const SummaryTableRow = ({notes, categoryName}) => {
    const activeNotesCount = notes.filter(note => note.archived === false && note.category === categoryName).length
    const archivedNotesCount = notes.filter(note => note.archived === true && note.category === categoryName).length

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
        <li className="table-row">
            <div className="col col-1">
                {noteIcon(categoryName)}
                {categoryName}
            </div>
            <div className="col col-2">{activeNotesCount}</div>
            <div className="col col-3">{archivedNotesCount}</div>
        </li>
    )
}

const mapStateToProps = (state) => {
    return {
        notes: state.notes
    }
}

export default connect(mapStateToProps)(SummaryTableRow);