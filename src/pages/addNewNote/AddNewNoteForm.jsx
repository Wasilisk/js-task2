import { useFormik } from 'formik';
import {dateFormat} from "../../utils/dateFormat";
import {connect} from "react-redux";
import {addNote} from "../../redux/notesSlice";

const AddNewNoteForm = (props) => {
    const formik = useFormik({
        initialValues: {
            name: '',
            category: '',
            content: '',
            date: '',


        },
        onSubmit: values => {
            values.created = dateFormat();
            props.addNote({...values});
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
                value={formik.values.email}
            />

            <label htmlFor="category">Category</label>
            <select
                name="category"
                onChange={formik.handleChange}
                value={formik.values.email}
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
                value={formik.values.email}
            />

            <label htmlFor="date">Date</label>
            <input
                id="date"
                name="date"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <input type="submit" value="Create"/>
        </form>
    )
}

export default connect(null, {addNote})(AddNewNoteForm);