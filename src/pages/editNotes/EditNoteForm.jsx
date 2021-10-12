import { useFormik } from 'formik';
import {connect} from "react-redux";
import {editNote} from "../../redux/notesSlice";

const EditNoteForm = (props) => {
    const formik = useFormik({
        initialValues: {
            name: props.note.name,
            category: props.note.category,
            content: props.note.content,
            dates: props.note.dates,
        },
        onSubmit: values => {
            values.created = props.note.created
            values.archived = props.note.archived
            props.editNote({note: values, noteId: props.noteId});
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.name}
            />

            <label htmlFor="category">Category</label>
            <select
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
            >
                <option value="Task">Task</option>
                <option value="Random Thought">Random Thought</option>
                <option value="Idea">Idea</option>
            </select>

            <label htmlFor="content">Content</label>
            <input
                id="content"
                name="content"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.content}
            />

            <label htmlFor="dates">Date</label>
            <input
                id="dates"
                name="dates"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.dates}
            />

            <input type="submit" value="Save"/>
        </form>
    )
}

export default connect(null, {editNote})(EditNoteForm);