import { useFormik } from 'formik';

const AddNoteFrom = () => {
    const formik = useFormik({
        initialValues: {
            name: '',

        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
                id="name"
                name="name"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="country">Category</label>
            <select
                name="email"
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
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <label htmlFor="date">Date</label>
            <input
                id="date"
                name="date"
                onChange={formik.handleChange}
                value={formik.values.email}
            />

            <input type="submit" value="Create"/>
        </form>
    )
}

export default AddNoteFrom;