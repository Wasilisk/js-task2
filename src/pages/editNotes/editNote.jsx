import AddNewNoteForm from "./AddNewNoteForm";
import {MdModeEditOutline} from "react-icons/md";
import {Modal} from "@mui/material";
import {useState} from "react";


const EditNote = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <i onClick={handleOpen}><MdModeEditOutline/></i>
            <Modal
                open={open}
                onClose={handleClose}
            >
                <div className="modal-content">
                    <span className="close" onClick={handleClose}>&times;</span>
                    <h3>Create new note</h3>
                    <EditNoteForm/>
                </div>
            </Modal>
        </>
    )
}

export default EditNote;