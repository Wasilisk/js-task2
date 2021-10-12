import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        name: 'Shopping list',
        created: 'April 24, 2021',
        category: 'Task',
        content: 'Crab, chips',
        dates: '3/5/2021',
        archived: false
    },
    {
        name: 'The teory of evolution',
        created: 'April 27, 2021',
        category: 'Random Thought',
        content: 'Read book',
        dates: '3/5/2021, 4/12/2021',
        archived: false
    },
    {
        name: 'Shopping',
        created: 'April 22, 2021',
        category: 'Task',
        content: 'Computer',
        dates: '3/5/2021,12/11/2021',
        archived: true
    },
    {
        name: 'Girl',
        created: 'April 27, 2021',
        category: 'Task',
        content: 'Buy toy bear',
        dates: '3/5/2021',
        archived: false
    },
    {
        name: 'Shopping list',
        created: 'April 27, 2021',
        category: 'Task',
        content: 'Tomatoes, bread',
        dates: '',
        archived: false
    },
    {
        name: 'Learn',
        created: 'April 27, 2021',
        category: 'Idea',
        content: 'Learn React-Redux',
        dates: '3/5/2021',
        archived: true
    },
    {
        name: 'Shopping list',
        created: 'April 27, 2021',
        category: 'Task',
        content: 'Apples, blueberry',
        dates: '11/5/2021',
        archived: false
    }
]

export const notesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        addNote: (state, action) => {
            let newNote = {
                name: action.payload.name,
                created: action.payload.created,
                category: action.payload.category,
                content: action.payload.content,
                dates: action.payload.dates,
                archived: false
            }
            state.push(newNote)
        },
        editNote: (state, action) => {
            state.splice(action.payload.noteId, 1, action.payload.note);
        },
        deleteNote: (state, action) => {
            state.splice(action.payload, 1);
        },
        archiveNote: (state, action) => {
            state[action.payload].archived = true;
        },
        unarchiveNote: (state, action) => {
            state[action.payload].archived = false;
        },
    },
})

export const { addNote, editNote, deleteNote, archiveNote, unarchiveNote } = notesSlice.actions

export default notesSlice.reducer