import { FaSearch } from "react-icons/fa";
import GradesControlButtons from "./GradesControlButtons";
import "./styles.css";
import { CiFilter } from "react-icons/ci";

export default function Grades() {
    return (
        <div id="wd-grades">
            <br></br>
            <GradesControlButtons />

            <div className="container" id="wd-assignments-editor" style={{ height: '80vh', overflowY: 'auto' }}>
                <div className="row mb-3">
                    <div className="col">
                        <div className="d-flex">
                            <div className="col me-2">
                                <label htmlFor="wd-search-students" className="form-label">
                                    <strong>
                                        <h5>
                                            Student Names
                                        </h5>
                                    </strong>
                                </label>

                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <FaSearch />
                                    </span>
                                    <input
                                        id="wd-search-students"
                                        className="form-control border-start-0"
                                        type="text"
                                        placeholder="Search Students"
                                    />
                                </div>
                            </div>

                            <div className="col">
                                <label htmlFor="wd-search-assignments" className="form-label">
                                    <strong>
                                        <h5>
                                            Assignment Names
                                        </h5>
                                    </strong>
                                </label>
                                <div className="input-group">
                                    <span className="input-group-text bg-white border-end-0">
                                        <FaSearch />
                                    </span>
                                    <input
                                        id="wd-search-assignments"
                                        className="form-control border-start-0"
                                        type="text"
                                        placeholder="Search Students"
                                    />
                                </div>
                            </div>

                        </div>

                    </div>

                    <div></div><br></br>

                    <div className="row mb-3">
                        <button id="wd-import" className="me-1 btn btn-lg btn-secondary" style={{ maxWidth: "200px" }}>
                            <CiFilter className="me-2 fs-2" />
                            Apply Filters
                        </button>

                    </div>

                    <div className="row mb-3">
                        <div className="table-responsive">
                            <table className="table table-striped table-bordered">
                                <thead>
                                    <tr>
                                        <th>Student Name</th>
                                        <th>A1 SETUP <br />Out of 100</th>
                                        <th>A2 HTML <br />Out of 100</th>
                                        <th>A3 CSS <br />Out of 100</th>
                                        <th>A4 BOOTSTRAP <br />Out of 100</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Jane Adams</td>
                                        <td>100</td>
                                        <td>96.67</td>
                                        <td>92.18</td>
                                        <td>66.22</td>
                                    </tr>
                                    <tr>
                                        <td>Christina Allen</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Samreen Ansari</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Han Bao</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td><input type="number" className="form-control" defaultValue="88.03" /></td>
                                        <td>98.99</td>
                                    </tr>
                                    <tr>
                                        <td>Mahi Sai Srinivas Bobbili</td>
                                        <td>100</td>
                                        <td>96.67</td>
                                        <td>98.37</td>
                                        <td>100</td>
                                    </tr>
                                    <tr>
                                        <td>Siran Cao</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>100</td>
                                        <td>100</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}



