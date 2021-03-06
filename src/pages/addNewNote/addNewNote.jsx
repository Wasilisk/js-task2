import {Modal} from "@mui/material";
import {useState} from "react";
import './addNewNote.css'
import AddNewNoteForm from "./AddNewNoteForm";

const AddNewNote = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
        <div className="buttons">
            <button className="add-note" id="addBtn" onClick={handleOpen}>Create Note</button>
        </div>
            <Modal
                open={open}
                onClose={handleClose}
            >
                    <div className="modal-content">
                        <span className="close" onClick={handleClose}>&times;</span>
                        <h3>Create new note</h3>
                        <AddNewNoteForm/>
                    </div>
            </Modal>
        </>
    )
}

export default AddNewNote;