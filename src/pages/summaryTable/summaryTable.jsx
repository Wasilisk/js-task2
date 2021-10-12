import SummaryTableRow from "./summaryTableRow";

const SummaryTable = (props) => {
    return (
        <div className="summary-table">
            <ul className="responsive-table">
                <li className="table-header">
                    <div className="col col-1">Note Category</div>
                    <div className="col col-2">Active</div>
                    <div className="col col-3">Archived</div>
                </li>
                <SummaryTableRow categoryName="Task"/>
                <SummaryTableRow categoryName="Random Thought"/>
                <SummaryTableRow categoryName="Idea"/>
            </ul>
        </div>
    );
}

export default SummaryTable;