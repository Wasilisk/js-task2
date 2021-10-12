import {MdModeEditOutline} from "react-icons/md";
import {Modal} from "@mui/material";
import {useState} from "react";
import EditNoteForm from "./EditNoteForm";


const EditNote = (props) => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <i className="note-icon" onClick={handleOpen}><MdModeEditOutline/></i>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <h3>Edit note</h3>
                    <EditNoteForm note={props.note} noteId={props.noteId}/>
                </div>
            </Modal>
        </>
    )
}

export default EditNote;