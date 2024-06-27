import { FaSearch } from "react-icons/fa";
import "./styles.css";
import { IoEllipsisVertical } from "react-icons/io5";

export default function QuizControls({
    addQuiz,
}: {
    addQuiz: () => void;
}) {
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
                    placeholder="Search for Quiz"
                />
            </div>

            <div className="icon-container">
                <button id="wd-add-assignment-group" className="btn btn-lg btn-danger me-1" onClick={addQuiz}>
                    + Quiz
                </button>
                <button id="wd-add-assignment" className="btn btn-lg btn-secondary me-1">
                    <IoEllipsisVertical className="fs-4" />
                </button>


            </div>

        </div>

    );
}
