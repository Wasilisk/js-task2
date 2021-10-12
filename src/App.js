import './App.css';
import NotesTable from "./pages/notesTable/notesTable";
import AddNewNote from "./pages/addNewNote/addNewNote";
import SummaryTable from "./pages/summaryTable/summaryTable";

function App() {
    return (
        <>
            <div className="container">
                <NotesTable/>
                <AddNewNote/>
            </div>
            <SummaryTable/>
        </>
    );
}

export default App;
