import { FaSearch } from "react-icons/fa";
import "./styles.css";

export default function AssignmentsControls() {
    return (
        <div id="wd-assignments" className="d-flex justify-content-between align-items-center mb-3">


            <div className="input-group" style={{ maxWidth: "300px" }}>
                <span className="input-group-text bg-white border-end-0">
                    <FaSearch />
                </span>
                <input
                    id="wd-search-assignment"
                    className="form-control border-start-0"
                    type="text"
                    placeholder="Search for Assignments"
                />
            </div>

            <div className="icon-container">
                <button id="wd-add-assignment-group" className="btn btn-lg btn-secondary me-1">
                    + Group
                </button>
                <button id="wd-add-assignment" className="btn btn-lg btn-danger me-1">
                    + Assignment
                </button>


            </div>

        </div>

    );
}
